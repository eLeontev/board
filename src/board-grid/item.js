import React from 'react';
import styled from 'styled-components';
import BugIcon from '../svg-icons/bug-icon';
import SubTaskIcon from '../svg-icons/subTask-icon';
import TaskIcon from '../svg-icons/task-icon';

const ItemContainer = styled.div`
    background-color: #fff;
    border: 1px solid rgb(204, 204, 204);
    border-left: none;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: .5rem;
        bottom: 0;
        background-color: red;
    }
`;

const ItemWrapper = styled.div`
    margin: 1rem;
    display: flex;
`;

const FlexChild = styled.div``;

const IconsContainer = styled(FlexChild)`
    width: 16px;
    margin-right: 1rem;
    margin-left: .5rem;
`;

const AvatarContainer = styled(FlexChild)`
    width: 32px;
    margin-left: 1rem;
`;

const NoAvatarContainer = styled.div`
    background-color: ${({color}) => color};
    width: 32px;
    height: 32px;
    border-radius: .3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
        content: '+';
        color: #fff;
        font-size: 2.4rem;
    }
`;

const CommonContainer = styled.p`
    font-size: 1.4rem;
    margin-top: 1rem 0 0;
`;

const LinkToIssue = styled.a`
    color: rgb(59, 115, 175);
    font-size: 1.4rem;
    text-decoration: ${({statusId}) => statusId > 2 ? 'line-through' : 'none'}
`;

const LabelContainer = styled(CommonContainer)`
    color: #fff;
    border-radius: .3rem;
    padding: .1rem .5rem;
    background-color: ${({backgroundColor}) => backgroundColor}
`;

const Item = ({params, statusId}) => {
    const typesOfIcons = {
        task: () => <TaskIcon />,
        subTask: () => <SubTaskIcon />,
        bug: () => <BugIcon />,
    };

    const getIconOfTypeOfItem = (typesOfIcons, type) => typesOfIcons[type]();

    return (
        <ItemContainer>
            <ItemWrapper>
                <IconsContainer>
                    {getIconOfTypeOfItem(typesOfIcons, params.type)}
                </IconsContainer>

                <FlexChild>
                    <h3><LinkToIssue href="#" statusId={statusId}>{params.title}</LinkToIssue></h3>
                    <CommonContainer>{params.description}</CommonContainer>
                    {params.label ? <LabelContainer backgroundColor={params.label.color}>{params.label.title}</LabelContainer> : ''}
                    <CommonContainer>{params.status}</CommonContainer>
                </FlexChild>

                <AvatarContainer>
                    <NoAvatarContainer color="rgb(172, 112, 122)" />
                </AvatarContainer>
            </ItemWrapper>
        </ItemContainer>
    );
};

export default Item;