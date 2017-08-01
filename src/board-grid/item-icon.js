import React from 'react';

import BugIcon from '../svg-icons/bug-icon';
import TaskIcon from '../svg-icons/task-icon';
import SubTaskIcon from '../svg-icons/subTask-icon';

import styled from 'styled-components';

const typesOfIcons = {
    bug: <BugIcon />,    
    task: <TaskIcon />,
    subTask: <SubTaskIcon />,
};

const getIconOfTypeOfItem = (typesOfIcons, type) => typesOfIcons[type];

const Container = styled.div`
    width: 16px;
    margin-right: 1rem;
    margin-left: .5rem;
`;

const IconContainer = ({type}) => (
    <Container>
        {getIconOfTypeOfItem(typesOfIcons, type)}
    </Container> 
);

export default IconContainer;
