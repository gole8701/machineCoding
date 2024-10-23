import React, { useEffect, useState } from "react";
import Board from "./board";
import style from "./style.module.css";
import { checkWinner, initialState } from "./utils";

function TicTacToe({ size = 4 }) {
  const [board, setBoard] = useState(initialState(size));
  const [turnStatus, setTurnStatus] = useState(true);
  const winner = checkWinner(board, size);

  const handleReset = () => { setBoard(initialState(size))};

useEffect(()=>{
    setBoard(initialState(size))
},[size])

const status =  winner !== null ? (winner === 'draw' ? 'Game Draw' : `Player ${winner} is Winner`) : 
                                   (turnStatus ? "Player X turn" : "Player O turn");

  const handleCell = (rowId, columnId) => {
    if (board[rowId][columnId] || winner) {
      return;
    }
    console.log(rowId, columnId,winner, "id");

    const deepCopy = JSON.parse(JSON.stringify(board));
    deepCopy[rowId][columnId] = winner ? winner : turnStatus ? "X" : "O";
    setBoard(deepCopy);
    setTurnStatus(!turnStatus);
  };

  return (
    <div className={style.ticTacToe}>
      <Board size={size} board={board} handleCell={handleCell}/>
      <div>Status: {status}</div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TicTacToe;
