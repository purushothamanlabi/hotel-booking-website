import React,{useRef,useState,useEffect,useContext} from 'react';
import '../styles/tourinfo.css';
import {Container , Row ,Col ,Form,ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import Newsletter from '../shared/Newsletters';
import {BASE_URL} from './../utils/config.js'
import avathar from '../assets/images/avatar.jpg'
import Booking from '../component/booking/Booking';
import useFetch from '.././Hooks/useFetch.js';




import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

import  {Authcontext} from './../context/authContext.js'

const TourInfo = () => {

  const {id} = useParams();
  const reviewmesgref =useRef('');

  const [tourRating,setTourRating] =useState(null);
  const {user} = useContext(Authcontext)

  const {data:tour ,loading,error} = useFetch(`${BASE_URL}/${id}`)
  const {
    photo, 
    title ,
    desc,
    price ,
    reviews ,
    city,
    distance ,
    maxGoupSize,
    address} = tour;

    // console.log(tour);

  const {totalRating,avgRating} = calculateAvgRating(reviews);

  const  options = {day:"numeric", month:"long", year:"numeric"};



  // sub mit req to server
  const subitHandler = async e =>{
    e.preventDefault()

    const reviewText = reviewmesgref.current.value;


    try{
     if(!user || user === undefined || user === null){ toast.info('Please sign in. Do you want to proceed?')}
        const reviewObj={
        username:user?.username,
        reviewText,
        rating:tourRating,
        }

       

        const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
        })
      
        const result = await res.json();
        if(!res.ok){

          return toast.warn("click the star",result.message)
        }
        toast.success(result.message)

    }catch(err){
      toast.error(err.message)

    }
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])

  return ( <>
    <section>
      <Container>
      {/* {loading && <h4 className="text-center pt-5">loading.........</h4>} */}
      {/* {error && <h4 className="text-center pt-5"> {error}</h4>} */}
       {
        // !loading && !error &&
        <Row>
        <Col lg="8">
          <div className="tour__content">
            <img src={photo} alt="" />

            <div className="tour__info">
              <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">

              <span className="tour__reting  d-flex align-items-center gap-1 " > 
              <i className="ri-star-s-fill" style={{color:"var(--secondary-color)"}}></i>   
               {avgRating === 0 ? null: avgRating }
              {totalRating===0 ? (
                  "not rated"
              ) :(
                    <span>({reviews?.length})</span   >
              )}           
             </span>

             <span>
              <i className="ri-map-pin-user-fill"></i>{address}
             </span>
              </div>

              <div className="tour__extra-details ">

                <span><i Class="ri-map-pin-user-fill"></i>{city}</span>

                <span ><i Class="ri-money-dollar-circle-line"></i>&#8377;{price} per person</span>

                <span><i Class="ri-map-pin-time-line"></i>08:00 AM </span>

           

              </div>
              <h5>Discription</h5>
             <p>{desc}</p>
            </div>
            {/* ------------------------------ tour review section ------------------------ */}
                <div className="tour__reviews mt-4">
                  <h4>({reviews?.length}) review</h4>

                  <Form onSubmit={subitHandler} >
                    <div className="d-flex align-items-center gap-4  mb-3 ratinggroup">
                      <span onClick={()=> {setTourRating(1); toast.info("tour have rated 1 star")}}>
                        1 <i Class='ri-star-s-fill'></i>
                      </span>
                      <span onClick={()=> {setTourRating(2); toast.info("tour have rated 2 star")}}>
                        2 <i Class='ri-star-s-fill'></i>
                      </span>
                      <span onClick={()=> {setTourRating(3); toast.info("tour have rated 3 star")}}>
                        3 <i Class='ri-star-s-fill'></i>
                      </span>
                      <span onClick={()=> {setTourRating(4); toast.info("tour have rated 4 star")}}>
                        4 <i Class='ri-star-s-fill'></i>
                      </span>
                      <span onClick={()=> {setTourRating(5); toast.info("tour have rated 5 star")}}>
                        5 <i Class='ri-star-s-fill'></i>
                      </span>
                    </div>
                    
                    <div className="review__input">


                      <input type="text"
                      ref={reviewmesgref}
                        placeholder='Share tour experience.' 
                        required
                        name="" id="" />
                      <button type="submit" className="btn primary__btn text-white">
                        submit
                      </button>
                    </div>

                  </Form>
                  <ListGroup className='user__review'>
                    {
                      reviews?.map(reviews =>(
                        <div className="review__item">
                          <img src={avathar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-centrer justify-content-between">
                              <div>
                                <h5>{reviews.username}</h5>
                                <p>
                                  {
                                    new Date(reviews.createdAt).toDateString(
                                      "en-US", options
                                    )
                                  }
                                </p>
                                </div>
                                <span className="d-flex align-items-centrer">
                                {reviews.rating} <i Class='ri-star-s-fill'></i>
                                </span>
                            </div>
                            <h6>{reviews.reviewText}</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>

                </div>


            {/* ------------------------------ tour review section ------------------------ */}

          </div>
        </Col>
        <Col lg='4'>
          <Booking tour={tour} avgRating={avgRating}/>
        </Col>
      </Row>
       }
      </Container>
    </section>
    <Newsletter />
     
     </>

    );
};

export default TourInfo;