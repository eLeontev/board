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

const transformDatesToString = ({created, updated}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const transformDate = (date) => `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;

    return {
        created: transformDate(created),
        updated: transformDate(updated),
    };
};

const ItemDetail = ({params: {title, type, description, status, labels, dates, tooltip: {reporter, assignee}}, onCloseItemDetails}) => (
    <ItemContainer>
        <ItemLeftPanel/>
        <ContentContainer>
            <ItemHeader title={title} type={type} onCloseItemDetails={onCloseItemDetails} />
            <ItemDescription description={description} />
            <ItemInfo
                status={status}
                labels={labels}
                tooltip={{reporter, assignee}}
                dates={transformDatesToString(dates)} />
        </ContentContainer>
    </ItemContainer>
);

export default ItemDetail;