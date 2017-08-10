import React from 'react';

import HeaderActions from './header-actions';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-basis: 100%;
    padding-bottom: 1rem;
    justify-content: space-between;
`;

const Header = styled.h2`
    font-size: 1.4rem;
    text-transform: uppercase;
`;

const LinkToIssue = styled.a`
    font-size: 1.4rem;
    color: rgb(59, 115, 175);
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

const Separator = styled.span`
    padding: 0 1rem;
    display: inline-block;
`;

const ItemHeader = ({type, title}) => (
    <Container>
        <Header>
            {type}
            <Separator>/</Separator>
            <LinkToIssue href="#">{title}</LinkToIssue>
        </Header>
        <HeaderActions dotSymbol="&#10625;" closeSymbol="&#10060;" />
    </Container>
);

export default ItemHeader;