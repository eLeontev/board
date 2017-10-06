import React, {Component} from 'react';

import BoardGrid from './board-grid/board-grid';
import ItemDetail from './item-detail/item-detail';
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

const GridBody = styled.div`
    flex-grow: 1;
    padding-right: 1rem;
`;

const BoardContent = styled.div`
    display: flex;
`;

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.openItemDetails = this.openItemDetails.bind(this)
    }

    openItemDetails(itemDetails) {
        this.setState({itemDetails})
    }

    render() {
        const getIssuesAccordingTheStatus = (columns, items) => columns.map(({id, label}) => ({
            id,
            label,
            items: items.filter(({statusId}) => statusId === id),
        }));

        const extendedColumns = getIssuesAccordingTheStatus(columns, items);
        const issuesPerMember = teamMembers.map(({id, initials}) => ({
                initials,
                items: extendedColumns.map(({labels, items}) => items
                    .filter(({userId}) => userId === id)
                    .map(({id, params, statusId}) => ({id, params, statusId})))
            }
        ));

        return (
            <div className="wrapper">
                <BoardTitleContainer>
                    <BoardTitle>{BOARD_TITLE}</BoardTitle>
                </BoardTitleContainer>

                <BoardContent>
                    <GridBody>
                        <BoardGridHeader columns={extendedColumns} />

                        <div>
                            {issuesPerMember.map(({initials, items}, key) => <BoardGrid key={key} columns={items} initials={initials} openItemDetails={this.openItemDetails} />)}
                        </div>
                    </GridBody>
                    <ItemDetail params={this.state.itemDetails || issuesPerMember[0].items[0][0].params} />
                </BoardContent>
            </div>
        );
    }
}

export default Board;
