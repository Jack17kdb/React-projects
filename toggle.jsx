import React, { useRef, useState } from 'react';
import './style.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  function toggleText() {
    setIsVisible(!isVisible);
  };
  
  return (
    <div>
      {isVisible && (
        <p>
          Toggle text means to switch between two or more states of text content, 
          typically by clicking a button or interacting with an element.
        </p>
      )}
      <button type='button' onClick={toggleText}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
    </div>
  );
};

export default App;
