import React from 'react';
import pic1 from "../assets/giphy.gif"

const Landing1 = ({ onNext }) => {
  return (
    <div className="landing-page" style={{position: "relative"}}>
      <img src={pic1} 
      style={{
        width: 200,
        position: 'absolute',
        top: -145,
        right:-50
      }}/>
            <img src={pic1} 
      style={{
        width: 200,
        position: 'absolute',
        top: 145,
        left: -50,
        transform: 'scaleX(-1)' 
      }}/>
      <h1 className='landing-header'>Welcome to our virtual connection</h1>
      <button className='button-fade' onClick={onNext}>Start</button>
    </div>
  );
};

export default Landing1;
