import React from 'react'
import i1 from './assets/img1.jpg'
import i2 from './assets/img2.jpg'
import i3 from './assets/2148761445.jpg'

const Carosal = () => {
  return (
    <div>
    <div >
    <h1>Carousel</h1>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active w-100" style={{height: '500px'}}>
        <img src={i1} class="d-block w-100 h-100" alt="..." style={{objectFit: 'cover'}}/>
      </div>
      <div class="carousel-item" style={{height: '500px'}}>
        <img src={i2} class="d-block w-100" alt="..." style={{objectFit: 'cover'}}/>
      </div>
      <div class="carousel-item" style={{height: '500px'}}>
        <img src={i3} class="d-block w-100" alt="..." style={{objectFit: 'cover'}}/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
    </div>
      
    </div>
  )
}

export default Carosal
