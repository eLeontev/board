import React from 'react';

import ItemHeader from './item-header';
import ItemLeftPanel from './item-left-panel';
import ItemDescription from './item-description';

import styled from 'styled-components';

const ItemContainer = styled.div`
    border-left: 1px solid rgb(204,204,204);
    flex-shrink: 0;
    flex-basis: 39.9rem;
    display: flex;
`;

const ContentContainer = styled.div`
    flex-basis: 100%;
    padding: 1.5rem 1rem 1rem;
`;

const ItemInfo = ({item}) => (
    <ItemContainer>
        <ItemLeftPanel/>
        <ContentContainer>
            <ItemHeader title={item.params.title} type={item.params.type} />
            <ItemDescription description={item.params.description} />
        </ContentContainer>
    </ItemContainer>
);

export default ItemInfo;