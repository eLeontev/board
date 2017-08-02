import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 32px;
    height: 32px;
    margin-left: 1rem;
    position: relative;
    
    &:hover span {
        display: block;  
    }
`;

const shapeOfAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: .3rem;
`;

const NoAvatarContainer = styled(shapeOfAvatar)`
    display: flex;
    cursor: default;
    align-items: center;
    justify-content: center;
    background-color: ${({color}) => color};
    
    &:before {
        color: #fff;
        content: '+';
        font-size: 2.4rem;
    }
`;

const AvatarContainer = styled(shapeOfAvatar)`
    background: url(${({avatarUrl}) => avatarUrl});
    background-size: cover; 
`;

const Tooltip = styled.span`
    display: none;
    left: 50%;
    top: 3.6rem;
    color: #fff;
    z-index: 10;
    font-size: 1.2rem;
    position: absolute;
    text-align: center;
    padding: .5rem 1rem;
    white-space: nowrap;
    border-radius: .3rem;
    transform: translateX(-50%);
    background-color: rgba(51, 51, 51, 0.9);
    
    &:before {
        width: 0;
        height: 0;
        left: 50%;
        top: -.4rem;
        content: '';
        position: absolute;
        transform: translateX(-50%);
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;  
        border-bottom: 4px solid rgba(51, 51, 51, 0.9);
    }
}
`;

const Avatar = ({assignee, avatarUrl}) => (
    <Container>
        {avatarUrl ? <AvatarContainer avatarUrl={avatarUrl} />: <NoAvatarContainer color="rgb(172, 112, 122)" />}
        <Tooltip>Assignee: {assignee}</Tooltip>
    </Container>
);

export default Avatar;