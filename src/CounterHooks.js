import React, { useState } from 'react';

function CounterHooks() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Hooks Counter {count}</h1>
      <p>
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>{' '}
        <button className="btn btn-danger" onClick={decrement}>
          Decrement
        </button>
      </p>
    </>
  );
}

export default CounterHooks;
