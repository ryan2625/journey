import React, { useState } from 'react';

const Game3 = ({ onNext }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isGameOver, setIsGameOver] = useState(false);

  const handleMove = (index) => {
    if (isGameOver || board[index]) return;

    const newBoard = board.slice();
    newBoard[index] = "X";
    setBoard(newBoard);

    // Check for win or trigger AI move
    if (checkWin(newBoard)) {
      setIsGameOver(true);
    } else {
      aiMove(newBoard);
    }
  };

  const aiMove = (newBoard) => {
    // Simple AI to "lose" intentionally
    const emptySquares = newBoard.reduce((acc, val, idx) => (val === null ? acc.concat(idx) : acc), []);
    const randomMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    newBoard[randomMove] = "O";
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setIsGameOver(true);
    }
  };

  const checkWin = (board) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="game-page">
      <p>Each move brings us closer and closer to the start of something beautiful</p>
      <div className="tic-tac-toe">
        {board.map((cell, idx) => (
          <button key={idx} onClick={() => handleMove(idx)}>{cell}</button>
        ))}
      </div>
      {isGameOver && (
        <div className="game-over">
          <p>Game over!</p>
          <button className="button-fade3" onClick={onNext}>Get your clue</button>
        </div>
      )}
    </div>
  );
};

export default Game3;
