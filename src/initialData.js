const avatarUrl = require('./img/useravatar.png');

export const teamMembers = [
    {
        initials: 'Employee 1',
        id: 1,
    },
    {
        initials: 'Employee 2',
        id: 2,
    },
];

export const items = [
     {
        id: 1,
        userId: 1,
        statusId: 1,
        params: {
            title: 'Issue 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut commodi similique!',
            status: 'Open',
            priority: 's0',
            type: 'subTask',
            labels: [
                {
                    title: 'Backend',
                    color: 'rgb(211, 156, 63)',
                },
                {
                    title: 'Team A',
                    color: 'rgb(59, 127, 196)',
                },
                {
                    title: 'Need More Information',
                    color: 'rgb(59, 127, 196)',
                }
            ],
            tooltip: {
                reporter: '',
                assignee: 'User 1',
                avatarUrl: '',
            },
            dates: {
                startDate: new Date(),
                endDate: new Date(),
            },
        },
    },
    {
        id: 2,
        userId: 1,
        statusId: 2,
        params: {
            title: 'Issue 2',
            description: 'Ad dolorum eveniet harum neque odio pariatur quasi quod reprehenderit similique velit.',
            status: 'In Progress',
            priority: 's1',
            type: 'bug',
            labels: [{
                title: 'Need More Information',
                color: 'rgb(59, 127, 196)',
            }],
            tooltip: {
                reporter: 'Jean F',
                assignee: 'Development Team',
                avatarUrl: '',
            },
            dates: {
                startDate: new Date(),
                endDate: new Date(),
            },
        },
    },
    {
        id: 3,
        userId: 2,
        statusId: 3,
        params: {
            title: 'Issue 3',
            description: 'Accusantium ducimus impedit laudantium magnam pariatur provident quia quis tempora ullam vel.',
            status: 'Resolved',
            priority: 'p2',
            type: 'task',
            tooltip: {
                reporter: 'Andrea S',
                assignee: 'QA Team',
                avatarUrl: avatarUrl,
            },
            dates: {
                startDate: new Date(),
                endDate: new Date(),
            },
        },
    },
    {
        id: 4,
        userId: 1,
        statusId: 2,
        params: {
            title: 'Issue 3',
            description: 'Accusantium ducimus impedit laudantium magnam pariatur provident quia quis tempora ullam vel.',
            status: 'Resolved',
            type: 'task',
            tooltip: {
                reporter: 'Timothy A',
                assignee: 'QA Team',
                avatarUrl: avatarUrl,
            },
            dates: {
                startDate: new Date(),
                endDate: new Date(),
            },
        },
    },
];

export const columns = [
    {
        label: 'assigned',
        id: 1,
    },
    {
        label: 'in progress',
        id: 2,
    },
    {
        label: 'done',
        id: 3,
    },
]; 