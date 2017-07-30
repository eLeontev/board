import React, { Component } from 'react'
import './App.css'
import BoardGrid from './board-grid/board-grid'          
import styled from 'styled-components'

const boardTitle = 'Board' 
const columns = [
  {
    label: 'assigned',
    items: [{id: 1}], 
  },
  {
    label: 'in rogress',
    items: [{id: 2}],
  },
  {
    label: 'done',
    items: [{id: 3}],
  },
]

const BoardTitle = styled.h1`
  color: #00f
`

class Board extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="board-header">
            <BoardTitle>{boardTitle}</BoardTitle>
        </div>
        <BoardGrid columns={columns} />
      </div>
    );
  }
}

export default Board;
