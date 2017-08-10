import React from 'react';

import ItemDetailContent from './item-detail-content';

import styled from 'styled-components';

const Container = styled.div`
    padding-right: 2rem;
`;

const Header = styled.div`
    display: flex;
    padding-bottom: 2rem;
`;

const HeaderDescription = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;
    padding-right: 1rem;
`;

const HeaderDecorator = styled.span`
    top: -5px;
    flex-grow: 1;
    position: relative;
    border-bottom: 1px solid rgb(230, 230, 230);
`;

const ItemInfo = (props) => {
    const keys = Object.keys(props);
    let initialDetailsObject = {
        keys: {
            dates: 'dates',
            status: 'details',
            labels: 'details',
            tooltip: 'people',
        },
        data: {
            details: {
                title: 'Details',
                data: [],
            },
            people: {
                title: 'People',
                data: [],
            },
            dates: {
                title: 'Dates',
                data: [],
            },
        }
    };

    const reduceHandler = (res, {label, value}) => {
        const data = { label: label };

        switch (Object.prototype.toString.call(value).slice(8, -1)) {
            case 'Object':
                res.data[res.keys[label]].data = Object.keys(value).map(label => ({label, value: value[label]}));
                break;

            default:
                data.value = value;
                res.data[res.keys[label]].data.push(data);
        }

        return res;
    };
    const mapHandler = (key) => ({
        label: key,
        value: props[key],
    });

    const detailsObject = keys.map(mapHandler)
        .reduce(reduceHandler, initialDetailsObject)
        .data;

    const details =  Object.keys(detailsObject).map(key => detailsObject[key]);

    const renderDetails = (details) => (
        <div>
            {details.map(({title, data}, key) => (
                <div key={key}>
                    <Header>
                        <HeaderDescription>{title}</HeaderDescription>
                        {key ? '': <HeaderDecorator />}
                    </Header>

                    <ItemDetailContent data={data} />
                </div>
            ))}
        </div>
    );

    return (
        <Container>
            {renderDetails(details)}
        </Container>
    );
};

export default ItemInfo;