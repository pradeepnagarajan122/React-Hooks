import React, { useState } from 'react'
import './App.css';

import Slideshow from './Slideshow';

function Wishlist() {

    const [clickedStatus, setClickedStatus] = useState(false)

    function clickRed(){


        // if(clickedStatus===true){
        //     setClickedStatus(false)
        // }
        // else{
        //     setClickedStatus(true)
        // }

        setClickedStatus(!clickedStatus)

    }

  return (
    <div>
      <i className={`bi bi-heart-fill ${(clickedStatus)?'redbg':'whitebg'}`} onClick={clickRed}></i>
      <Slideshow/>
    </div>
  
  )
}

export default Wishlist
