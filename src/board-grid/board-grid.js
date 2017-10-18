import React from 'react';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import compose from 'recompose/compose';
import Column from './column';

import ArrowIcon from '../svg-icons/arrow-icon'

import styled from 'styled-components';

const MemberIssuesContainer = styled.div`
`;

const ColumnsContainer = styled.div`
    align-content: stretch;
    display: flex;
    height: ${({isCollapsed}) => (isCollapsed ? 0 : 'auto')};
    overflow: hidden;
`;

const MemberInitials = styled.h3`
    cursor: pointer;
    font-size: 1.4rem;
    padding: 1rem;
`;

const CountOfIssues = styled.span`
    color: rgb(112, 112, 112);
    font-size: 1.2rem;
    &:before {
        content: ' ';
    }
`;

const ArrowIconContainer = styled.span`
    top: -1.5px;
    padding-right: 5px;
    position: relative;

    svg {
        transform: rotate(${({isCollapsed}) => isCollapsed && '90deg'});
        transition: transform .2s;
    }
`;

const withCollapseToggle = compose(
    withState('isCollapsed', 'setCollapsed', false),
    withProps(({isCollapsed, setCollapsed}) => ({ toggle: () => setCollapsed(!isCollapsed)}))
);

const BoardGrid = ({columns, initials, isCollapsed, onOpenItemDetails, toggle}) => {
    const getCountOfIssues = (columns) => columns.reduce((count, items) => count + items.length, 0);

    return (
        <MemberIssuesContainer>
            <MemberInitials onClick={toggle}>
                <ArrowIconContainer isCollapsed={isCollapsed}>
                    <ArrowIcon />
                </ArrowIconContainer>
                {initials}
                <CountOfIssues>{getCountOfIssues(columns)} issues</CountOfIssues>
            </MemberInitials>

            <ColumnsContainer isCollapsed={isCollapsed}>
                {columns.map((items, key) => <Column key={key} items={items} onOpenItemDetails={onOpenItemDetails} />)}
            </ColumnsContainer>
        </MemberIssuesContainer>
    )
};

export default withCollapseToggle(BoardGrid);
