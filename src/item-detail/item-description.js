import React from 'react';

import EditIcon from '../svg-icons/edit-icon';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    cursor: pointer;
    margin-left: -5px;
    margin-bottom: 2rem;
    border: 1px solid #fff;

    &:hover {
        border: 1px solid rgb(204, 204, 204);
    }
    
    &:hover div {
        visibility: visible;
    }
`;

const contentStyle = `
    margin: 0;
    padding: 5px;
    font-size: 1.4rem;
`;

const DefaultContent = styled.p`
    ${contentStyle}
    border: 1px solid transparent;
`;

const EditableContent = styled.textarea`
    ${contentStyle}
    width: 100%;
    box-sizing: border-box;
    font-family: sans-serif;
`;

const EditorMarker = styled.div`
    flex-shrink: 0;
    padding: 3px;
    flex-basis: 20px;
    visibility: hidden;
    background-color: rgb(240, 240, 240);
    border-left: 1px solid rgb(204, 204, 204);
`;

const ItemDescription = ({description, isEditable, onChangeDescription, onChangeTypeOfContent}) => (
    <Container>
        {isEditable
            ? <EditableContent
                value={description}
                innerRef={(textarea) => textarea && textarea.focus()}
                onChange={(e) => onChangeDescription(e.target.value)}
                onBlur={() => onChangeTypeOfContent(false)} />
            : <DefaultContent onClick={() => onChangeTypeOfContent(true)}>{description}</DefaultContent>}
        <EditorMarker  title="Edit"><EditIcon /></EditorMarker>
    </Container>
);

export default ItemDescription;