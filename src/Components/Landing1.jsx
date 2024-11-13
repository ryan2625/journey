import React from 'react';

const Landing1 = ({ onNext }) => {
  return (
    <div className="landing-page">
      <h1 className='landing-header'><span>Welcome</span> to our virtual connection</h1>
      <button className='button-fade' onClick={onNext}>Start</button>
    </div>
  );
};

export default Landing1;
