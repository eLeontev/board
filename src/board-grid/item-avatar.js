import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
    width: 32px;
    margin-left: 1rem;
`;

const NoAvatarContainer = styled.div`
    background-color: ${({color}) => color};
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    border-radius: .3rem;
    justify-content: center;
    &:before {
        color: #fff;
        content: '+';
        font-size: 2.4rem;
    }
`;

const Avatar = ({assignee, avatarUrl}) => (
    <AvatarContainer>
        <NoAvatarContainer color="rgb(172, 112, 122)" />
    </AvatarContainer>
);

export default Avatar;