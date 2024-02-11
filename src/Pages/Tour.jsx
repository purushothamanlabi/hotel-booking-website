import React, { useEffect, useState } from "react";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SeatchBar";
import Newsletter from "./../shared/Newsletters";
import { Container, Row, Col } from "reactstrap";

import useFetch from ".././Hooks/useFetch.js";
import { BASE_URL } from "../utils/config";

import offer01 from "./../assets/images/Offer.png";
import offer02 from "./../assets/images/offer-2.png";
import offer03 from "./../assets/images/offer-3.jpg";
import offer04 from "./../assets/images/offer-4.png";

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "./../styles/ReactDate.css";
import "react-calendar/dist/Calendar.css";


import Calendar from "react-calendar";

const Tour = () => {
  const [pagecount, setpagecount] = useState(0);
  const [page, setpage] = useState(0);

  const {
    data: tours,
    loading,
    error} = useFetch(`${BASE_URL}/?page=${page}`);
  const { data: tourCount } = useFetch(
    `${BASE_URL}/search/getTourCount`
  );

  useEffect(() => {
    if (tourCount) {
      const pages = Math.ceil(tourCount / 8);
      setpagecount(pages);
      window.scrollTo(0, 0);
    }
  }, [page, tourCount, tours]);
  const [value, onChange] = useState(new Date());

  const calendarContainerStyle = {
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow for a visual effect
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <section className="head__tour_info" style={{ paddingBottom: "0" }}>
              <div className="tour__slider">
                {/* <h3>ique, corporis explicabo ad nostrum molestias quo et est, beatae </h3> */}
                <MDBCarousel showIndicators showControls fade>
                  <MDBCarouselItem itemId={1}>
                    <img src={offer01} className="d-block w-100" alt="..." />
                    <MDBCarouselCaption></MDBCarouselCaption>
                  </MDBCarouselItem>

                  <MDBCarouselItem itemId={2}>
                    <img src={offer02} className="d-block w-100" alt="..." />
                    <MDBCarouselCaption></MDBCarouselCaption>
                  </MDBCarouselItem>

                  <MDBCarouselItem itemId={3}>
                    <img src={offer03} className="d-block w-100" alt="..." />
                    <MDBCarouselCaption></MDBCarouselCaption>
                  </MDBCarouselItem>
                </MDBCarousel>
                <MDBCarouselItem itemId={4}>
                  <img src={offer04} className="d-block w-100" alt="..." />
                  <MDBCarouselCaption></MDBCarouselCaption>
                </MDBCarouselItem>
              </div>

              <div className="tour__text">
                <div className="hero__subtitle d-flex align-items-center"></div>
                <h1>
                  We compare hotel prices from 100s of sites
                  <span className="highlight">memory</span>
                </h1>
                <p>
                  You can enjoy access to perks like Member Prices, saving an
                  average of 15% on thousands of hotels. Terms may apply. You
                  can enjoy access to perks like Member Prices, saving an
                  average of 15% on thousands of hotels. Terms may apply. You
                  can enjoy access to perks like Member Prices, saving an
                  average of 15% on tho
                </p>
              </div>

              <div className="tour__datepic">
                <Calendar onChange={onChange} value={value} />
              </div>
            </section>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-3">
        <Container>
          {/* {loading && <h4 className="text-center pt-5">loading.........</h4>}
          {error && <h4 className="text-center pt-5"> {error}</h4>}

          {!loading && !error && ( <Row> */}

          {tours && tours.length > 0 && (
            <Row>
              {tours?.map((tour, index) => (
                <Col lg="3" sm="6" md="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} index={index} />
                </Col>
              ))}

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pagecount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setpage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tour;
