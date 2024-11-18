import React, { useState } from 'react'
import i1 from './assets/img1.jpg'
import i2 from './assets/img2.jpg'
import i3 from './assets/2148761445.jpg'

function CustomSlider() {

    const sliderImages = [i1, i2, i3]

    const [ImgIndex, setImgIndex] = useState(0)
    const [renderImg, setRenderImg] = useState(sliderImages[ImgIndex])

    function updateRender(position){
        console.log('func call')
        if(position==='+'){
            if(ImgIndex>=0&&ImgIndex<2){
                setImgIndex(ImgIndex+1)
            }
            else{
                setImgIndex(0)
            }
        }
        else{
            if(ImgIndex!==0&&ImgIndex>0&&ImgIndex<=2){
                setImgIndex(ImgIndex-1)
            }
            else{
                setImgIndex(2)
            }
        }
        setRenderImg(sliderImages[ImgIndex])
    }


  return (
    <div className='slider-container'>
      <img className='slider-image' src={renderImg} alt='abc' />
      <div className='btn-container'>
        <button onClick={()=>updateRender('-')}>{'<'}</button>
        <button onClick={()=>updateRender('+')}>{'>'}</button>
      </div>
    </div>



  )
}

export default CustomSlider
