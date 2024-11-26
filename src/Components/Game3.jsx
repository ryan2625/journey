import React, { useState } from 'react';

const Game3 = ({ onNext }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);  // New state to track the player's turn
  const [winner, setWinner] = useState(null); // Track the winner

  const handleMove = (index) => {
    if (isGameOver || !playerTurn || board[index]) return;  // If it's not the player's turn or the spot is taken, do nothing

    const newBoard = [...board]; // Copy the board
    newBoard[index] = "X"; // Player makes their move
    setBoard(newBoard); // Update the board state

    const winner = checkWin(newBoard);
    if (winner) {
      if (winner === "X") {
        setWinner("X"); // Player wins
        setIsGameOver(true); // Set game over
      }
    } else {
      setPlayerTurn(false); // Switch to AI's turn after player move
      // Delay the AI move by 1.5 seconds
      setTimeout(() => aiMove(newBoard), 1500);
    }
  };

  const aiMove = (currentBoard) => {
    const newBoard = [...currentBoard]; // Copy the current board
    const emptySquares = newBoard.reduce((acc, val, idx) => (val === null ? acc.concat(idx) : acc), []);
    
    if (emptySquares.length === 0) return; // No empty squares, no move can be made

    const randomMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    newBoard[randomMove] = "O"; // AI makes its move
    setBoard(newBoard); // Update the board state

    const winner = checkWin(newBoard);
    if (winner) {
      if (winner === "O") {
        setWinner("O"); // AI wins
        setIsGameOver(true); // Set game over
      }
    } else {
      setPlayerTurn(true); // Switch back to player's turn after AI move
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
        return board[a]; // Return the winner ("X" or "O")
      }
    }
    return null;
  };

  // Handle manual restart
  const handleRestart = () => {
    setBoard(Array(9).fill(null)); // Reset the board
    setIsGameOver(false); // Reset game over state
    setWinner(null); // Reset winner state
    setPlayerTurn(true); // Set the player's turn to true to start the game
  };

  return (
    <div className="game-page" style={{ position: "relative" }}>
      <p>Each move brings us closer and closer to the start of something beautiful</p>
      <div className="tic-tac-toe">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleMove(idx)}
            disabled={!playerTurn || board[idx]}  // Disable button if it's not the player's turn or if the cell is filled
          >
            {cell}
          </button>
        ))}
      </div>
      <p><em onClick={handleRestart} style={{ cursor: 'pointer' }}>Restart</em></p>
      {isGameOver && winner === "X" && (  // Only show Game Over if the player wins
        <div className="game-over" style={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center"
        }}>
          <p>Game over! You win!</p>
          <button className="button-fade3" onClick={onNext}>Get your clue</button>
        </div>
      )}
    </div>
  );
};

export default Game3;
