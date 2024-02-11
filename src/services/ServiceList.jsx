import React from 'react'
import ServicesCard from './ServicesCard';
import {Col} from "reactstrap";


import WeatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'



const ServiceData =[
  {
    imgUrl:WeatherImg,
    title: "Expedia",
    desc: "Book hotels worldwide with Expedia. Discover great deals and discounts for your perfect stay.",
  },
  {
    imgUrl: guideImg,
    title: "Booking.com",
    desc: "Find and book hotels Booking.com. Choose from a wide range of accommodations with reservation options.",
  },
  {
    imgUrl: customizationImg,
    title: "Airbnb",
    desc: "Experience unique stays with Airbnb. Book homes, apartments, and unique accommodations for your travel needs.",
  },

]



const ServiceList = () => {
  return (
    <>
    {ServiceData.map((item,index) =>(
      <Col lg="3" md='6' sm='12' className='mb-4' key={index}>
        <ServicesCard item={item} />
      </Col>
    )) }
    </>
  )
};

export default ServiceList;