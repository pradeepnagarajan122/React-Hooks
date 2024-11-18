import './App.css';
import { useState } from 'react';

function App() {

  // let count = 2;

  // function increment(){
  //   count = count+1
  //   console.log('Count updated: ',count)
  // }

  const [reactCount, setReactCount] = useState(0)


  function addCount(){
    setReactCount(reactCount+1)
  }
  function santech(){
    setReactCount(reactCount-1)
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={santech}>-</button>
        <span>{reactCount}</span>
        <button onClick={addCount}>+</button>
      </div>
    </div>
  );
}

export default App;
