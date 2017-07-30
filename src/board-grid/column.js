import React from 'react'
import Item from './item'

const Column = ({items, label}) => (
    <div>
        <h2>{label}</h2>
        {items.map(({id}, key) => <Item key={key} id={id} title="Title" />)}
    </div>
)

export default Column