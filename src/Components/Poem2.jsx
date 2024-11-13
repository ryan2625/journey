import React from 'react';

const Poem2 = ({ onNext }) => {
  return (
    <div className="intro-page">
      <p>A swipe led to a game, and a game led to our start</p>
      <p>You won my number, and later won my heart</p>
      <p>Head to where our first match came through</p>
      <p>A game of Tic-Tac-Toe awaits you!</p>
      <button className='button-fade2' onClick={onNext}>Start the Game</button>
    </div>
  );
};

export default Poem2;
