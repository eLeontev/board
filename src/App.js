import React, {Component} from 'react';
import BoardGrid from './board-grid/board-grid';
import BoardGridHeader from './board-grid/boar-grid-header';

import {columns, teamMembers, items} from './initialData';

import styled from 'styled-components';

const BOARD_TITLE = 'Kanban Board';

const BoardTitleContainer = styled.div`
   padding: 2rem;
   background-color: rgb(245, 245, 245);
    border-bottom: 1px solid rgb(204, 204, 204);
`;

const BoardTitle = styled.h1`
     font-size: 2.4rem;
`;


class Board extends Component {
    render() {
        const getIssuesAccordingTheStatus = (columns, items) => columns.map(({id, label}) => ({
            id,
            label,
            items: items.filter(({statusId}) => statusId === id),
        }));

        const extendedColumns = getIssuesAccordingTheStatus(columns, items);
        const issuesPerMember = teamMembers.map(({id, initials}) => ({
                initials,
                items: extendedColumns.map(({label, items}) => items
                    .filter(({userId}) => userId === id)
                    .map(({id, params, statusId}) => ({id, params, statusId})))
            }
        ));

        return (
            <div className="wrapper">
                <BoardTitleContainer>
                    <BoardTitle>{BOARD_TITLE}</BoardTitle>
                </BoardTitleContainer>

                <BoardGridHeader columns={extendedColumns} />

                <div>
                    {issuesPerMember.map(({initials, items}, key) => <BoardGrid key={key} columns={items} initials={initials} />)}
                </div>
            </div>
        );
    }
}

export default Board;
