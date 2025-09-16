import React, { useRef, useState } from 'react';
import './style.css';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Character Count: {count}</h1>
      <textarea
          onChange={(e) => setCount(e.target.value.length)}
        />
    </div>
  );
};

export default App;
