import React from "react";
import Newsletter from "./.././../shared/Newsletters";
import { Container, Row, Col } from "reactstrap";
import "./about.css";
import Subtitle from "../../shared/Subtitle";
import benifit1 from "../../assets/images/benifit-1.png";
import benifit2 from "../../assets/images/benifit-2.png";
import benifit3 from "../../assets/images/benifit-3.png";
import benifit4 from "../../assets/images/benifit-4.png";
import { plansInfo } from "../../assets/data/plans";
import experienceImg from '../../assets/images/Experiences.png'

const About = () => {
  return (
    <>
      {/* -------------------------------- expreence sec st ------------------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="exprience__content">
                <Subtitle Subtitle={"Experience"} />
                <h2>
              With all your experience, <br /> we are here to serve you
            </h2>





            <p>
  Over the years, our customers have shared their experiences with us, and it's a testament to the exceptional service we provide. Each journey is unique, filled with unforgettable moments and personal growth.
  <br />
  Join our community of travelers, and let your story become a part of the extraordinary adventures we create. Your satisfaction is our priority.
</p>

              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
  <span>12k+</span>
  <h6>Successful Trips</h6>
</div>

<div className="counter__box">
  <span>5k+</span>
  <h6>Regular Clients</h6>
</div>

<div className="counter__box">
  <span>15</span>
  <h6>Experience years</h6>
</div>

          </div>
        </Col>
        <Col lg="6">
          <div className="experience__img ">
            <img src={experienceImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>

      {/* -------------------------------- expreence sec end ------------------------- */}

      {/* -------------------------------- image sec st ---------------------------------- */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">Benefits of This Web</h2>
            </Col>
          </Row>

          <Row>
            <div className="benifit_list">
              <div className="item1">
                <div className="banifit_img">
                  <img src={benifit2} alt="" />
                </div>

                <p>
                  Discover the beauty of our destinations. Whether it's serene landscapes or vibrant cityscapes,
                  we offer a range of experiences to cater to your preferences.
                </p>
              </div>
              <div className="item2">
                <div className="banifit_img">
                  <img src={benifit4} alt="" />
                </div>
                <p>
                  Immerse yourself in local cultures and traditions. Our curated itineraries ensure you
                  get a taste of the authentic and unique aspects of each place you visit.
                </p>
              </div>
              <div className="item3">
                <div className="banifit_img">
                  <img src={benifit3} alt="" />
                </div>
                <p>
                  Create lasting memories with our expert guides and support staff. Your journey is our priority,
                  and we strive to make it unforgettable.
                </p>
              </div>
              <div className="item4">
                <div className="banifit_img">
                  <img src={benifit1} alt="" />
                </div>
                <p>
                  Indulge in luxury and comfort throughout your travels. We believe in providing a seamless
                  and enjoyable experience from start to finish.
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      {/* -------------------------------- image sec end ---------------------------------- */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Subscription "} />
              <h2 className="gallery__title">Select your preferred plan.</h2>
            </Col>
          </Row>

          <div className="plantop">
            {plansInfo?.map((plan, index) => (
              <Col className="colume mt-3">
                <div className="plan" key={index}>
                  <div className="inner">
                    <span className="pricing">
                      <span>
                      &#8377;{plan.cost} <small>{plan.Duration}</small>
                      </span>
                    </span>
                    <p className="title">{plan.type}</p>
                    <p className="info">{plan.discription}</p>
                    <ul className="features">
                      <li>
                        <span className="icon">
                          <svg
                            height={24}
                            width={24}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              fill="currentColor"
                              d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                            />
                          </svg>
                        </span>
                        <span>{plan.Benefits1}</span>
                      </li>
                      <li>
                        <span className="icon">
                          <svg
                            height={24}
                            width={24}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              fill="currentColor"
                              d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                            />
                          </svg>
                        </span>
                        <span>{plan.Benefits2}</span>
                      </li>
                      <li>
                        <span className="icon">
                          <svg
                            height={24}
                            width={24}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              fill="currentColor"
                              d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                            />
                          </svg>
                        </span>
                        {plan.Benefits3}
                      </li>
                    </ul>
                    <div className="action">
                      <a className="button" href="#">
                        Choose plan
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </div>

       
        </Container>
      </section>

      {/* ================================================================= */}
      <Newsletter />
    </>
  );
};

export default About;
