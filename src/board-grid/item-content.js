import React from 'react';

import {Paragraph, Label} from '../common/styled-components';

import styled from 'styled-components';

const Container = styled.div``;
const HeadOfItem = styled.h3``;

const LinkToItem = styled.a`
    font-size: 1.4rem;
    color: rgb(59, 115, 175);
    text-decoration: ${({statusId}) => statusId > 2 ? 'line-through' : 'none'}
`;

const ItemContent = ({title, statusId, description, label, status}) => {
    const clickHandler = (e) => {
        e.preventDefault();
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