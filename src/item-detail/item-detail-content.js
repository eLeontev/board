import React from 'react';

import {Label} from '../common/styled-components';

import styled from 'styled-components';

const DataContainer = styled.div`
    padding-bottom: 2rem;
`;

const DataPairContainer = styled.div`
    display: flex;
    padding-bottom: 1.5rem;
`;

const DataLabel = styled.span`
    flex-shrink: 0;
    flex-basis: 100px;
    font-size: 1.4rem;
    color: rgb(112, 112, 112);
    text-transform: capitalize;
`;

const DataValue = styled.span`
    font-size: 1.4rem;
    color: rgb(51, 51, 51);
`;

const NoneData = styled.span`
    font-size: 1.4rem;
    font-style: italic;
    color: rgb(153, 153, 153);
`;

const LabelContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ExtendedLabel = styled(Label)`
    margin: 0 10px 2px 0;
`;

const renderLabels = (labels) => (
    <LabelContainer>
        {labels.map(({color, title}, key) => <ExtendedLabel key={key} backgroundColor={color}>{title}</ExtendedLabel>)}
    </LabelContainer>
);

const ItemDetailContent = ({data}) => (
    <DataContainer>
        {data.map(({label, value}, key) => (
            <DataPairContainer key={key}>
                <DataLabel>{label}</DataLabel>
                {value
                    ? label === 'labels'
                        ? renderLabels(value)
                        : <DataValue>{value}</DataValue>
                    : <NoneData>None</NoneData>}
            </DataPairContainer>
        ))}
    </DataContainer>
);

export default ItemDetailContent;