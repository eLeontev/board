import React from 'react';

import ItemInfo from './item-info';
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

const transformDatesToString = ({startDate, endDate}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const transformDate = (date) => `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;

    return {
        startDate: transformDate(startDate),
        endDate: transformDate(endDate),
    };
};

const ItemDetail = ({item}) => (
    <ItemContainer>
        <ItemLeftPanel/>
        <ContentContainer>
            <ItemHeader title={item.params.title} type={item.params.type} />
            <ItemDescription description={item.params.description} />
            <ItemInfo
                status={item.params.status}
                labels={item.params.labels}
                tooltip={{reporter: item.params.tooltip.reporter, assignee: item.params.tooltip.assignee}}
                dates={transformDatesToString(item.params.dates)} />
        </ContentContainer>
    </ItemContainer>
);

export default ItemDetail;