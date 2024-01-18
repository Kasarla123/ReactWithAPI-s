import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/image2.jpg';
import img2 from './images/image1.jpg';
import profile from './images/profilepic.jpg'
import './About.css';

export default function About() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={img1} className="d-block w-100 carouselImages" alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className="d-block w-100 carouselImages" alt="..." />
        </Carousel.Item>
      </Carousel>
      <div>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-8">
              <div class="info">
              <h1 className='txt1'>Hello,</h1>
              <h1 className='txt1' >I'm Praneetha,</h1>
              <h1 className='txt1'>Front-end Developer</h1>
              <p className='txt2'>Versatile Front-end Developer with expertise in building responsive web applications using HTML, CSS, JavaScript, Bootstrap, and React.js. Currently focusing on backend technologies to expand my skill set. Passionate about delivering efficient and innovative solutions, I specialize in building dynamic and interactive user interfaces with React.js.</p>
              </div>
            </div>
            <div className='col-md-4'>
             <img src={profile} className='profileimg' alt=" "/>
             </div>
           </div>
          </div>
      </div>
    </>
  );
}
