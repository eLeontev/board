import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    background-color: #fff;
    border: 1px solid rgb(204, 204, 204);
    padding: 1rem;
`;

const Item = ({params}) => (
    <ItemContainer>
        <h3>{params.title}</h3>
    </ItemContainer>
);

export default Item;