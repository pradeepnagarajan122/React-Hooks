import './App.css';
import { useEffect, useState } from 'react';
import Popup from './Popup';

function App() {

  const [popupStatus, setPopupStatus] = useState(true)

  const [count, setCount] =useState(0)
  


  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setPopupStatus(true)
  //   },1000)
  // }, [])


  function add(){
    setCount(count+1)
  }

  function minus(){

    setCount(count-1)
  }


  // useEffect(()=>{
  //   alert('Count value updated')
  // },[count])


  



  return (
    <div className='popup-parent'>
      <h1>React UseEffect</h1>
      <p>{count}</p>
      <button onClick={minus}>-</button>
      <button onClick={add}>+</button>
      {popupStatus&&<Popup popupUpdater={setPopupStatus}/>}
    </div>
  );
}

export default App;
