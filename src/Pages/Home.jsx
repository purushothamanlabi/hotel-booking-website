import React, { useEffect, useState } from 'react';
import '../styles/home.css';


import {Container, Row , Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img1.jpg';
import heroImg02 from '../assets/images/hero-img2.jpeg';
import her0IMG03 from '../assets/images/hero-img3.jpg';
import resimg from  '../assets/images/reshome.jpeg';
import Subtitle from '../shared/Subtitle';

import SearchBox from "../shared/SeatchBar"
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../component/Featured-tours/FeaturedTourList';
import Testimonials from '../component/Testimonial/Testimonials';
import Newsletters from '../shared/Newsletters';




const Home = () => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return(
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle Subtitle={'Know Before You Go'}/>
                
              </div>
              <h1>We compare hotel prices from 100s of sites
                <span className="highlight">hope.</span> 
                </h1>
                <p>You can enjoy access to perks like Member Prices,
                saving an average of 15% on thousands of hotels. Terms may apply.
                Explore our vast selection and make memories that last a lifetime.
                Terms may apply.
                Explore our vast selection and make memories that last a lifetime.
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg} alt="" />
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5 hero__video-box ">
              <img src={ windowWidth < 990 ?  resimg: her0IMG03} alt="" controls />
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5" >
              <img src={heroImg02} alt="" />
            </div>
          </Col>

        <SearchBox />


        </Row>
      </Container>
    </section>
    


        <section>
          <Container>
            <Row>
              <Col lg='3'>
                    <h5 className="server__subtitle">What We Serve</h5>
                    <h2 className='server__title'>We Offer Our Best Services</h2>
              </Col>
              <ServiceList />
            </Row>
          </Container>
        </section>


        <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5'>
                <Subtitle Subtitle={'Explore'} />
                <h2 className='featuor__tour-title'>Our Featured Tours</h2>

              </Col>
              <FeaturedTourList />

            </Row>
          </Container>
        </section>

      <section>
        <Container>
          <Row>
            <Col gl="12">
            <Subtitle Subtitle={'Fans Love'} />
              <h2 className='testimont__title'>what our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>


      <Newsletters />




    </>
  );
};

export default Home;













