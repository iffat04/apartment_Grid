import React from 'react';
import { Carousel } from 'react-bootstrap';

const SingleApartment = () => {
    return (
        <Carousel>
     
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`./images/apartment2.jpg`}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/apartment2.jpg"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/apartment2.jpg"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/apartment3.jpg"
            alt="Second slide"
          />
      
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/apartment4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default SingleApartment;