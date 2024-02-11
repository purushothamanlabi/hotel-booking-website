import React from 'react';

import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testimonials = () => {

  const settings ={

    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,
    
    responsive:[
      {
        
        breakpoint:992,
        settings:{
           slidesToShow:2,
           sliderToScroll:1,
           infinite:true,
           dots:true,
        }

      },
      {
         breakpoint:576,
         settings:{
          slidesToShow:1,
          sliderToScroll:1,
         }
      }
      
    ]

  }


  return ( <Slider {...settings}>
    <div className="testimonial py-4 px-3">
    <p>
        I had an incredible experience with this travel agency! The attention to detail and personalized service made my trip unforgettable. The guides were knowledgeable, and the itinerary was well-planned.
      </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04}  className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className="mb-0 mt-3"  >Kumar</h6>
            <p>Customer</p>
          </div>
        </div>
    </div>


    <div className="testimonial py-4 px-3">
    <p>
        Exceptional service and attention to detail! The guides were friendly and knowledgeable, and the itinerary offered a perfect balance of adventure and relaxation. I can't wait to book my next trip with them.
      </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01}  className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className="mb-0 mt-3"  >vikram</h6>
            <p>customer</p>
          </div>
        </div>
    </div>


    <div className="testimonial py-4 px-3">
    <p>
        Amazing travel experience! The team ensured everything ran smoothly, from accommodations to excursions. I highly recommend their services to anyone looking for a well-curated and enjoyable trip.
      </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03}  className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className="mb-0 mt-3"  >Vijay</h6>
            <p>customer</p>
          </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
    <p>
        I've traveled with this agency multiple times, and each trip has been a fantastic experience. The team is professional, and they go above and beyond to ensure a memorable journey. Highly recommended!
      </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02}  className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className="mb-0 mt-3"  >Prabhu</h6>
            <p>customer</p>
          </div>
        </div>
    </div>

  </Slider>
    
  )
}

export default Testimonials