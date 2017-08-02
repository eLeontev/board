import React from 'react';

import Avatar from './item-avatar';
import ItemContent from './item-content';
import IconsContainer from './item-icon';

import styled from 'styled-components';

const ItemContainer = styled.div`
    cursor: move;
    position: relative;
    background-color: #fff;
    border: 1px solid rgb(204, 204, 204);
    border-top: ${({isFirstItem}) => isFirstItem ? '1px solid rgb(204, 204, 204)' : 'none'};

    &:before {
        top: 0;
        left: 0;
        bottom: 0;
        content: '';
        width: .6rem;
        position: absolute;
        background-color: ${({color}) => color};
    }
`;

const ItemWrapper = styled.div`
    padding: 1rem;
    display: flex;
`;

const colors = ['rgb(204, 0, 0)', 'rgb(217, 170, 52)', 'rgb(24, 173, 24)', 'rgb(245,245,245)'];
const getColorOfPriority = (colors, priority) => colors[priority.slice(-1)] || colors[colors.length - 1];

const Item = ({params, statusId, isFirstItem}) => {
    const {priority, type, label, title, description, status, tooltip} = params;
    debugger
    return (
        <ItemContainer color={getColorOfPriority(colors, priority)} isFirstItem={isFirstItem}>
            <ItemWrapper>
                <IconsContainer type={type} priority={priority} />

                <ItemContent 
                    label={label}
                    title={title}
                    status={status}    
                    statusId={statusId}
                    description={description}
                />

                <Avatar assignee={tooltip.assignee} avatarUrl={tooltip.avatarUrl} />
            </ItemWrapper>
        </ItemContainer>
    );
};

export default Item;