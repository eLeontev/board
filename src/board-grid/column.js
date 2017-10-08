import React from 'react';
import Item from './item';
import styled from 'styled-components';

const ColumnContainer = styled.div`
    flex-shrink: 1;
    flex-basis: 100%;
    margin: 0 0.5rem;
    background-color: rgb(245,245,245);
`;

const Column = ({onOpenItemDetails, items = []}) => (
    <ColumnContainer>
        {items.map(({params, statusId, id}, key) => <Item key={key} id={id} params={params} statusId={statusId} isFirstItem={key === 0} onOpenItemDetails={onOpenItemDetails} />)}
    </ColumnContainer>
);

export default Column;