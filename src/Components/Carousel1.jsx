import React from 'react'
import x1 from '../images/image1.jpg';
import x2 from '../images/yoga1.jpg';
import x3 from '../images/y class.jpg';
import './style.css';
// import x4 from '../images/'
export default function Carousel1() {
  return (
    <div>
        <div className="divm12">
        <div className="owl">
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={x1} class="d-block w-100 images1" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={x2} class="d-block w-100 images1" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={x3} class="d-block w-100 images1" alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src={x4} class="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
    </div>
  )
}
