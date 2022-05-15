import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from "../images/a.jpg"
import image2 from "../images/b.jpg"
import image3 from "../images/c.jpg"
import './Home.css'
function Home() {
  return (
    <div className='mx-auto mt-4 mb-4  scoller'>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <p> <b>Find Weather of Your Location</b></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-image w-100"
      src={image2}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-image w-100"
      src={image3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Home