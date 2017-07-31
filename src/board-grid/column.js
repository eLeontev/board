import React from 'react';
import Item from './item';
import styled from 'styled-components';

const ColumnContainer = styled.div`
    flex-basis: 100%;
    flex-shrink: 1;
    margin: 0 0.5rem;
    background-color: rgb(245,245,245);
`;

const Column = ({items = []}) => (
    <ColumnContainer>
        {items.map(({params}, key) => <Item key={key} params={params} />)}
    </ColumnContainer>
);

export default Column;