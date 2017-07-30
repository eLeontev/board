import React from 'react'
import Column from './column'
import styled from 'styled-components'

const boardContainer = styled.div`
    display: flex;
    padding: 10px;
`

const BoardGrid = ({columns}) => {
    return (
        <boardContainer> 
            {columns.map(({items, label}, key) => <Column key={key} items={items} label={label} />)}
        </boardContainer>
    )
}

export default BoardGrid