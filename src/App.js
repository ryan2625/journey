import React, { useState, useRef } from 'react';
import Landing1 from "./Components/Landing1"
import Poem2 from "./Components/Poem2"
import Game3 from "./Components/Game3"
import FinalMessage4 from './Components/FinalMessage4';
import "./App.css"

const App = () => {
  const [visiblePage, setVisiblePage] = useState(0); 

  const landingRef = useRef(null);
  const introRef = useRef(null);
  const gameRef = useRef(null);
  const finalRef = useRef(null);

  const sectionRefs = [landingRef, introRef, gameRef, finalRef];

  const showNextPage = () => {
    const nextPage = visiblePage + 1;
    if (nextPage < sectionRefs.length) {
      setVisiblePage(nextPage);
        setTimeout(() => {
        sectionRefs[nextPage].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 400);
    }
  };

  return (
    <div className="app">
      <div ref={landingRef} className={`section ${visiblePage >= 0 ? "visible" : ""}`}>
        <Landing1 onNext={showNextPage} />
      </div>
      <div ref={introRef} className={`section ${visiblePage >= 1 ? "visible" : "none"}`}>
        <Poem2 onNext={showNextPage} poem="Here is your special poem..." />
      </div>
      <div  ref={gameRef} className={`section ${visiblePage >= 2 ? "visible" : "none"}`}>
        <Game3 onNext={showNextPage} />
      </div>
      <div ref={finalRef} className={`section ${visiblePage >= 3 ? "visible" : "none"}`}>
        <FinalMessage4 clue="Your first clue is..." />
      </div>
    </div>
  );
};

export default App;
