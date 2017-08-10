import React from 'react';
import styled from 'styled-components';

const ActionContainer = styled.div`
    display: flex;
    position: relative;
    top: -0.5rem;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 2px 8px;
    font-size: 1.4rem;
    border-radius: 3px;
    margin-right: 1rem;
    color: rgb(112, 112, 112);
    border: 1px solid rgb(204, 204, 204);
    background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(242, 242, 242) 100%);
    
    &:hover {
        border-color: rgb(153, 153, 153);
        background-color: rgb(242, 242, 242);
        box-shadow: inset 0 3px 6px 0 rgba(0, 0, 0, 0.1);
        background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(247, 247, 247) 100%);
    }
`;

const Close = styled.span`
    padding: .5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(112, 112, 112);
    
    &:hover {
        color: rgb(51, 51, 51);
    }


`;

const HeaderActions = ({closeSymbol, dotSymbol}) => (
    <ActionContainer>
        <Button title="Actions">{dotSymbol}{dotSymbol}{dotSymbol}</Button>
        <Close title="Close detail"><span role="img" aria-label="Close">{closeSymbol}</span></Close>
    </ActionContainer>
);

export default HeaderActions;