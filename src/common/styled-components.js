import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: 1.4rem;
    margin-top: 1rem 0 0;
`;

export const Label = styled(Paragraph)`
    color: #fff;
    white-space: nowrap;
    padding: .1rem .5rem;
    border-radius: .3rem;
    background-color: ${({backgroundColor}) => backgroundColor}
`;