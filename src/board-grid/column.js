import React from 'react';
import Item from './item';
import styled from 'styled-components';

const ColumnContainer = styled.div`
    flex-shrink: 1;
    flex-basis: 100%;
    margin: 0 0.5rem;
    background-color: rgb(245,245,245);
`;

const Column = ({items = []}) => (
    <ColumnContainer>
        {items.map(({params, statusId}, key) => <Item key={key} params={params} statusId={statusId} isFirstItem={key === 0} />)}
    </ColumnContainer>
);

export default Column;