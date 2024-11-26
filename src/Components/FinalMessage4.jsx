import React from 'react';
import image from "../assets/haert1.webp"

const FinalMessage4 = ({ clue }) => {
  return (
    <div className="final-message-page" style={{position: "relative"}}>
      <img src={image} alt="" style={{ position: "absolute", zIndex: 0,           position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: "400px",
          filter: "brightness(1.8)"}}/>
      <p style={{position: "relative", zIndex: 10}}>You won, just like the first time.</p>
      <p style={{position: "relative", zIndex: 10}}>But real victory came when I saw you in person for the first time.</p>
      <p style={{position: "relative", zIndex: 10}}>Now it's time to relive that magic.</p>
      <p style={{position: "relative", zIndex: 10}}>Head to the place where "LOVE ACTUALLY" began to feel like our own story.</p>
    </div>
  );
};

export default FinalMessage4;
