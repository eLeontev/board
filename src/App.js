import React, {Component} from 'react';

import BoardGrid from './board-grid/board-grid';
import ItemDetail from './item-detail/item-detail';
import BoardGridHeader from './board-grid/boar-grid-header';

import {columns, teamMembers, items} from './initialData';

import styled from 'styled-components';

const initState = { isDisplayedDetails: false, BOARD_TITLE: 'Kanban Board' };

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

        this.state = {...initState};

        this.onOpenItemDetails = this.onOpenItemDetails.bind(this);
        this.onCloseItemDetails = this.onCloseItemDetails.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
    }

    onOpenItemDetails(itemDetails) {
        this.setState({ itemDetails, isDisplayedDetails: true })
    }

    onCloseItemDetails() {
        this.setState({...initState})
    }

    onChangeDescription(description) {
        this.setState({itemDetails: {...this.state.itemDetails, description}})
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
                    <BoardTitle>{this.state.BOARD_TITLE}</BoardTitle>
                </BoardTitleContainer>

                <BoardContent>
                    <GridBody>
                        <BoardGridHeader columns={extendedColumns} />

                        <div>
                            {issuesPerMember.map(({initials, items}, key) => <BoardGrid key={key} columns={items} initials={initials} onOpenItemDetails={this.onOpenItemDetails} />)}
                        </div>
                    </GridBody>
                    {this.state.isDisplayedDetails
                        ? <ItemDetail
                            params={this.state.itemDetails}
                            onCloseItemDetails={this.onCloseItemDetails}
                            onChangeDescription={this.onChangeDescription} />
                        : null }
                </BoardContent>
            </div>
        );
    }
}

export default Board;
