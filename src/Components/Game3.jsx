import React, { useState } from 'react';

const Game3 = ({ onNext }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isGameOver, setIsGameOver] = useState(false);

  const handleMove = (index) => {
    if (isGameOver || board[index]) return;

    const newBoard = board.slice();
    newBoard[index] = "X";
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setIsGameOver(true); // Set game over if the player wins
    } else {
      aiMove(newBoard);
    }
  };

  const aiMove = (newBoard) => {
    const emptySquares = newBoard.reduce((acc, val, idx) => (val === null ? acc.concat(idx) : acc), []);
    const randomMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    newBoard[randomMove] = "O";
    setBoard(newBoard);

    // If the AI wins, don't set game over, just let the player reset the game manually
    if (checkWin(newBoard)) {
      // No need to set game over; we'll leave it up to the user to restart
      // setIsGameOver(true); // No need to do this anymore
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

  // Handle manual restart
  const handleRestart = () => {
    setBoard(Array(9).fill(null)); // Reset board
    setIsGameOver(false); // Reset game over state
  };

  return (
    <div className="game-page" style={{ position: "relative" }}>
      <p>Each move brings us closer and closer to the start of something beautiful</p>
      <div className="tic-tac-toe">
        {board.map((cell, idx) => (
          <button key={idx} onClick={() => handleMove(idx)}>{cell}</button>
        ))}
      </div>
      <p><em onClick={handleRestart} style={{ cursor: 'pointer' }}>Restart</em></p>
      {isGameOver && (
        <div className="game-over" style={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center"
        }}>
          <p>Game over!</p>
          <button className="button-fade3" onClick={onNext}>Get your clue</button>
        </div>
      )}
    </div>
  );
};

export default Game3;
