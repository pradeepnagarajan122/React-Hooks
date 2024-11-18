import React, { useEffect } from 'react'

function Popup(props) {

    function closePopup(){
        props.popupUpdater(false)
    }
  

    useEffect(()=>{
        return()=>{
            alert("Are you sure? you want to close this popup")
        }
    },[])

  return (
    <div className='popup-container'>
        <h2>Popup</h2>
        <p>New Offers</p>
        <button onClick={closePopup}>Close</button>

    </div>
  )
}

export default Popup
