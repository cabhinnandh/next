import { Button } from '@mui/material';
import React, { useState } from 'react'

function Counter() {
   const [count, setCount] = useState(0);

   const incrementCounter = () => {
     setCount(count + 1);
   };
   const decrementCounter = () => {
     setCount(count - 1);
   };
  return (
    <div>
      <p>current counter {count}</p>
      <Button onClick={incrementCounter}>increment </Button>
      <Button onClick={decrementCounter}> decrement</Button>
    </div>
  );
}

export default Counter