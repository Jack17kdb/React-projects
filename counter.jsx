import React from 'react';
import {useState} from 'react'

export function App(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count === 0 ? 0 : count - 1);
  }

  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <button type='button' value='increment' onClick={increment}>Increment</button>
      <button type='button' value='decrement' onClick={decrement}>Decrement</button>
    </div>
  );
}
