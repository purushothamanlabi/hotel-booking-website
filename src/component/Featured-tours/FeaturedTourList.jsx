import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";


import useFetch from './../../Hooks/useFetch.js'
import {BASE_URL}  from './../../utils/config.js'

const FeaturedTourList = () => {
  
  
  const { data: featuredTours, loading ,error } = useFetch(`${BASE_URL}/tours/search/getfeaturedTours`);
  

  return (
    <>{loading === false ? (
      <h2>Loading...</h2>
    ) : (
      <>
        {error ? (
          <h2>{error}</h2>
        ) : (
          featuredTours?.map((tour) => (
            <Col lg="3" mb='6' sm='6' className="mb-4" key={tour._id}>
              <TourCard tour={tour} />
            </Col>
          ))
        )}
      </>
    )}
    </>
  );
};

export default FeaturedTourList;
