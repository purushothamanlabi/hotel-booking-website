import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";
import Newsletter from '.././shared/Newsletters'

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';


import offer01 from './../assets/images/Offer.png'
import offer02 from './../assets/images/offer-2.png'
import offer03 from './../assets/images/offer-3.jpg'
import offer04 from './../assets/images/offer-4.png'
import "./../styles/ReactDate.css";
import "react-calendar/dist/Calendar.css";



import Calendar from "react-calendar";


const SearchResult = () => {
  const location = useLocation();
  const [value, onChange] = useState(new Date());

  const [data] = useState(location.state);
  
  return (
    <>
     
     <section>
        <Container>
          <Row >  
           <section className="head__tour_info" style={{paddingBottom:"0",}}>

                <div className="tour__slider">
                  {/* <h3>ique, corporis explicabo ad nostrum molestias quo et est, beatae </h3> */}
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselItem itemId={1}>
                              <img src={offer01} className="d-block w-100" alt="..." />
                              <MDBCarouselCaption>
                                
                                
                              </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem itemId={2}>
                              <img src={offer02} className="d-block w-100" alt="..." />
                              <MDBCarouselCaption>
                              
                              </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem itemId={3}>
                              <img src={offer03} className="d-block w-100" alt="..." />
                              <MDBCarouselCaption>
                               
                              </MDBCarouselCaption>
                            </MDBCarouselItem>
                          </MDBCarousel>
                            <MDBCarouselItem itemId={4}>
                            <img src={offer04} className="d-block w-100" alt="..." />
                            <MDBCarouselCaption>
                              
                           
                            </MDBCarouselCaption>
                          </MDBCarouselItem>
                </div>



                <div className="tour__text">
                <div className="hero__subtitle d-flex align-items-center">
                </div>
                <h1>
                  We compare hotel prices from 100s of sites
                  <span className="highlight">memory</span>
                </h1>
                <p>
                  You can enjoy access to perks like Member Prices, saving an
                  average of 15% on thousands of hotels. Terms may apply.
                  You can enjoy access to perks like Member Prices, saving an
                  average of 15% on thousands of hotels. Terms may apply.
                  You can enjoy access to perks like Member Prices, saving an
                  average of 15% on tho
                </p>

            

              </div>



                <div className="tour__datepic">
                  {/* <h3>select your booking date</h3> */}
                <Calendar onChange={onChange} value={value} />
              </div>  
                </section>
          </Row>
        </Container>
      </section>
      <section>
          <Container>
            <Row>
              {data.length === 0 ? (
                <h4 className="text-center"> No hotel available</h4>  
              ) : (
                data?.map((tour) => (
                  
                  <Col lg="3" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </section>
      <Newsletter/>
    </>
  );
};

export default SearchResult;
