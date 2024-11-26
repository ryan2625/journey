import React from 'react';
import image from "../assets/heart2.webp"

const Poem2 = ({ onNext }) => {
  return (
    <div className="intro-page" style={{position: "relative"}}>
            <img src={image} alt="" style={{ position: "absolute", zIndex: 0,           position: 'absolute',
          top: '180%',
          left: '90%',
          transform: 'translate(-50%, -50%)',
          height: "200px",
          filter: "brightness(1.8)"}}/>
                      <img src={image} alt="" style={{ position: "absolute", zIndex: 0,           position: 'absolute',
          top: '120%',
          left: '00%',
          transform: 'translate(-50%, -50%)',
          height: "200px",
          filter: "brightness(1.8)"}}/>
                                <img src={image} alt="" style={{ position: "absolute", zIndex: 0,           position: 'absolute',
          top: '-50%',
          left: '100%',
          transform: 'translate(-50%, -50%)',
          height: "200px",
          filter: "brightness(1.8)"}}/>
                                          <img src={image} alt="" style={{ position: "absolute", zIndex: 0,           position: 'absolute',
          top: '-120%',
          left: '00%',
          transform: 'translate(-50%, -50%)',
          height: "200px",
          filter: "brightness(1.8)"}}/>
      <p>A swipe led to a game, and a game led to our start</p>
      <p>You won my number, and later won my heart</p>
      <p>Head to where our first match came through</p>
      <p>A game of Tic-Tac-Toe awaits you!</p>
      <button className='button-fade2' onClick={onNext}>Start the Game</button>
    </div>
  );
};

export default Poem2;
