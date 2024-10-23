import React, { useState } from 'react'
import style from './style.module.css';

function Board({size, board, handleCell}) {

console.log(board,"board")

  return (
    <div>
        <div className={style.board} style={{display:'grid', gridTemplateColumns: `repeat(${size}, 50px)`}}>
            {board.map((rows,rowId)=>rows.map((columns, columnId)=>
            <div key={`${rowId}-${columnId}`} onClick={()=>handleCell(rowId,columnId)} className={style.cell}>{columns}</div>))}
        </div>
    </div>

  )
}

export default Board