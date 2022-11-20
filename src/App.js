/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {

  let [count, setCount]  = useState(1);

  const handleAdd = ()=>{
    setCount(()=>{
      return count+1;
    })
  }
  const handleSub = ()=>{
    setCount(()=>{
      return count-1;
    })
  }
  const handleReset = ()=>{
    setCount(()=>{
      return 0;
     
    })
  }

  return (
    <div>
      <h1>Value: {count}</h1>
      <Button variant="success"  onClick={handleAdd}>Add</Button>{' '}
      <Button variant="primary" onClick={handleSub}>Subtract</Button>{' '}
      <Button variant="danger" onClick={handleReset}>Reset</Button>{' '}
    </div>
  );
}

export default App;
