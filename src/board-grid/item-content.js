import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const HeadOfItem = styled.h3``;

const Paragraph = styled.p`
    font-size: 1.4rem;
    margin-top: 1rem 0 0;
`;

const LinkToItem = styled.a`
    font-size: 1.4rem;
    color: rgb(59, 115, 175);
    text-decoration: ${({statusId}) => statusId > 2 ? 'line-through' : 'none'}
`;

const Label = styled(Paragraph)`
    color: #fff;
    padding: .1rem .5rem;
    border-radius: .3rem;
    background-color: ${({backgroundColor}) => backgroundColor}
`;

const ItemContent = ({title, statusId, description, label, status}) => {
    const clickHandler = (e) => {
        e.preventDefault();
        console.log(title);
    };

    return (
        <Container>
            <HeadOfItem>
                <LinkToItem href={title}
                            statusId={statusId}
                            onClick={clickHandler}>
                    {title}
                </LinkToItem>
            </HeadOfItem>

            <Paragraph>{description}</Paragraph>
            {label && <Label backgroundColor={label.color}>{label.title}</Label>}
            <Paragraph>{status}</Paragraph>
        </Container>
    );
};

export default ItemContent;