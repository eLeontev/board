import React from 'react';
import Column from './column';

import ArrowIcon from '../svg-icons/arrow-icon'

import styled from 'styled-components';

const MemberIssuesContainer = styled.div`
`;

const ColumnsContainer = styled.div`
    display: flex;
    align-content: stretch;
`;

const MemberInitials = styled.h3`
    padding: 1rem;
    font-size: 1.4rem;
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
    cursor: pointer;
    padding-right: 5px;
    position: relative;
    
    svg {
        transform: rotate(${({isCollapsed}) => isCollapsed && '90deg'})
    }
`;

const BoardGrid = ({columns, initials, onOpenItemDetails}) => {
    const getCountOfIssues = (columns) => columns.reduce((count, items) => count + items.length, 0);

    return (
        <MemberIssuesContainer>
            <MemberInitials>
                <ArrowIconContainer isCollapsed={true}>
                    <ArrowIcon />
                </ArrowIconContainer>
                {initials}
                <CountOfIssues>{getCountOfIssues(columns)} issues</CountOfIssues>
            </MemberInitials>

            <ColumnsContainer>
                {columns.map((items, key) => <Column key={key} items={items} onOpenItemDetails={onOpenItemDetails} />)}
            </ColumnsContainer>
        </MemberIssuesContainer>
    )
};

export default BoardGrid;