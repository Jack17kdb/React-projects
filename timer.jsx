import React, { useRef, useState, useEffect } from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [isrunning, setIsrunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isrunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isrunning]);

  function startTimer() {
    setIsrunning(true);
  }

  function stopTimer() {
    setIsrunning(false);
  }

  return (
    <div id="form">
      <h1 id="header">{count}</h1>
      <div id="button-div">
        <button class="button" type="button" value="start" onClick={startTimer}>
          start
        </button>
        <button
          class="button"
          type="button"
          value="reset"
          onClick={() => setCount(0)}
        >
          reset
        </button>
        <button class="button" type="button" value="stop" onClick={stopTimer}>
          stop
        </button>
      </div>
    </div>
  );
};

export default App;
