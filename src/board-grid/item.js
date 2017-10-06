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
    
    &:hover {
        background: rgb(233, 233, 233);
    }
    
    &:hover:before {
        background: ${({color}) => color === '#fff'? 'rgb(233, 233, 233)': color};
    }
`;

const ItemWrapper = styled.div`
    padding: 1rem;
    display: flex;
`;

const colors = ['rgb(204, 0, 0)', 'rgb(217, 170, 52)', 'rgb(24, 173, 24)', '#fff'];
const getColorOfPriority = (colors, priority) => priority ? colors[priority.slice(-1)]: colors[colors.length - 1];

const Item = ({params, statusId, isFirstItem, onOpenItemDetails}) => {
    const {priority, type, labels, title, description, status, tooltip} = params;
    return (
        <ItemContainer color={getColorOfPriority(colors, priority)} isFirstItem={isFirstItem} onClick={() => onOpenItemDetails(params)}>
            <ItemWrapper>
                <IconsContainer type={type} priority={priority} />

                <ItemContent 
                    label={labels ? labels[0] : ''}
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