import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import "./tour-card.css";






const TourCard = ({ tour ,index }) => {
  const { _id, title, photo, price, featured, reviews, city } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

        
  // console.log("jkhasf-------------",(data[3]));

  return (
    <>
    <img src="" alt="" />
      <div className="tour__card">
        <Card>
          <div className="tour__img">
      
             <img src={photo} alt="tour-img" />
         
         
            {console.log(photo)}
            {featured && <span>Featured</span>}
          </div>

          <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
              <span className="tour__location  d-flex align-items-center gap-1 ">
                <i Class="ri-map-pin-line"></i>
                {city}
              </span>
              <span className="tour__reting  d-flex align-items-center gap-1 ">
                <i Class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                  "not rated"
                ) : (
                  <span>({reviews.length})</span>
                )}
              </span>
            </div>
            
            <h5 className="tour_title">
              <Link to={`/tour/${_id}`}>{title}</Link>
            </h5>

            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
              <h5 className="mt__per">
              &#8377;{price} <span>/per person/</span>
              </h5>

              <button className="btn booking__btn  button_color">
                <Link to={`/tour/${_id}`}>Book now</Link>
              </button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TourCard;
