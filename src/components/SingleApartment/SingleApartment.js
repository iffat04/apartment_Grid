import React from 'react';
import { Carousel } from 'react-bootstrap';

const SingleApartment = () => {
    var array = [1,2,3,4,5,6];
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
      
          // Generate random number
          var j = Math.floor(Math.random() * (i + 1));
                      
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
          
      return array;
   }
   var shuffledArray = shuffleArray(array);
   console.log(shuffledArray);

    return (
        <Carousel>
          {
            shuffledArray.map(Element=> <Carousel.Item>
              <img
                className="d-block w-100"
                src={`./images/apartment${Element}.jpg`}
                alt="First slide"
              />
             
            </Carousel.Item>
              )
          }
      </Carousel>
    );
};

export default SingleApartment;