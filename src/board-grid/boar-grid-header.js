import React from 'react';
import styled from 'styled-components';

const ColumnHeaderContainer = styled.div`
    display: flex;
    padding: 1rem;
`;

const ColumnHeader = styled.h2`
    flex-basis: 100%;
    flex-shrink: 1;
    font-size: 1.4rem;
    padding-left: 1rem;
`;

const BoardGridHeader = ({columns, countOfItems}) => (
    <ColumnHeaderContainer>
        {columns.map(({label, items}, key) => <ColumnHeader key={key}><b>{items.length}</b> {label}</ColumnHeader>)}
    </ColumnHeaderContainer>
);

export default BoardGridHeader;