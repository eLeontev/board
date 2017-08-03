import React from 'react';

import BugIcon from '../svg-icons/bug-icon';
import TaskIcon from '../svg-icons/task-icon';
import SubTaskIcon from '../svg-icons/subTask-icon';

import MajorIcon from '../svg-icons/major-icon';
import MinorIcon from '../svg-icons/minor-icon';
import TrivialIcon from '../svg-icons/trivial-icon';
import NoPriorityIcon from '../svg-icons/noPriority-icon';

import styled from 'styled-components';

const typesOfIcons = {
    bug: <BugIcon />,    
    task: <TaskIcon />,
    subTask: <SubTaskIcon />,
};

const priorityIcons = [<MajorIcon />, <MinorIcon />, <TrivialIcon />];

const getIconOfTypeOfItem = (typesOfIcons, type) => typesOfIcons[type];

const Container = styled.div`
    width: 16px;
    margin-right: 1rem;
    margin-left: .5rem;
`;

const ArrowContainer = styled.div`
    margin-top: 1rem;
`;

const IconContainer = ({type, priority}) => (
    <Container>
        {getIconOfTypeOfItem(typesOfIcons, type)}
        <ArrowContainer>
            {priority ? priorityIcons[priority.slice(-1)] : <NoPriorityIcon />}
        </ArrowContainer>
    </Container> 
);

export default IconContainer;
