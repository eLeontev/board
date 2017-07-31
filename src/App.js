import React, {Component} from 'react';
import BoardGrid from './board-grid/board-grid';
import BoardGridHeader from './board-grid/boar-grid-header';

import styled from 'styled-components';

const boardTitle = 'Board';

const columns = [
    {
        label: 'assigned',
        items: [
            {
                id: 1,
                userId: 1,
                params: {
                    title: 'Issue 1',
                },
            },
        ],
    },
    {
        label: 'in progress',
        items: [
            {
                id: 2,
                userId: 1,
                params: {
                    title: 'Issue 2',
                },
            },
        ],
    },
    {
        label: 'done',
        items: [
            {
                id: 3,
                userId: 2,
                params: {
                    title: 'Issue 3',
                },
            },
        ],
    },
];

const teamMembers = [
    {
        initials: 'Employee 1',
        id: 1,
    },
    {
        initials: 'Employee 2',
        id: 2,
    },
];

const BoardTitleContainer = styled.div`
   padding: 2rem;
   background-color: rgb(245, 245, 245);
`;

const BoardTitle = styled.h1`
     font-size: 2.4rem;
`;


class Board extends Component {
    render() {
        const issuesPerMember = teamMembers.map(({id, initials}) => ({
                initials,
                issues: columns.map(({label, items}) => items
                    .filter(({userId}) => userId === id)
                    .map(({id, params}) => ({params, id})))
            }
        ));

        return (
            <div className="wrapper">
                <BoardTitleContainer>
                    <BoardTitle>{boardTitle}</BoardTitle>
                </BoardTitleContainer>

                <BoardGridHeader columns={columns} />

                <div>
                    {issuesPerMember.map(({initials, issues}, key) => <BoardGrid key={key} columns={issues} initials={initials} />)}
                </div>
            </div>
        );
    }
}

export default Board;
