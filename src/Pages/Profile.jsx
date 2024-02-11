import React, { useEffect, useState } from "react";
import "./../styles/profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./../utils/config.js";

import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Profile = () => {
  const [data, setdata] = useState([]);
  const { profileId } = useParams();
  const [bookingData, setBookingData] = useState([]);

  function showmsg() {
    toast.info("sorry, you can't update your profile")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/profile/${profileId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setdata(jsonData);

        const bookings = jsonData.Booking || [];
        setBookingData(bookings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [profileId]);

  const [active, setActive] = useState(1);

  console.log(bookingData);

  function formatMongoDBDate(date) {
    const dateObject = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  }
  

  // console.log(bookingdata);
  return (
    <div>
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary"
                      width="110"
                    />
                    <div className="mt-3">
                      <h4>{data.name}</h4>
                      <p className="text-secondary mb-1">
                        {formatMongoDBDate(data.createdAt)}
                      </p>
                      <p className="text-muted font-size-sm">
                       Welcome to BookNook
                      </p>
                      <button className="btn btn-primary mr-2">Follow</button>
                      <button className="btn btn-outline-primary">
                        Message
                      </button>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-twitter me-2 icon-inline text-info"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                        Twitter
                      </h6>
                      <span className="text-secondary">@Twitter</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-instagram me-2 icon-inline text-danger"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        Instagram
                      </h6>
                      <span className="text-secondary">@Instagram</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-facebook me-2 icon-inline text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        Facebook
                      </h6>
                      <span className="text-secondary">@Facebook</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={
                          Object.keys(data).length > 0
                            ? data.name
                            : "loading......."
                        }
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary ">
                      <input
                        type="text"
                        className="form-control"
                        value={
                          Object.keys(data).length > 0
                            ? data.email
                            : "loading......."
                        }
                        disabled
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value="+91 "
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary">
                      <input   onClick={showmsg}
                        type="button"
                       className="btn-input"
                        value="Save Changes"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <MDBCard style={{ padding: "0" }}>
                  <MDBCardHeader>Your bookings</MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardTitle>
                      {bookingData.length == 0
                        ? "No data found"
                        : bookingData[0].address}
                    </MDBCardTitle>
                    <MDBCardText className="custom-card-text">
                      {bookingData.length == 0
                        ? "You have not booked any hotel yet"
                        : `Date: ${formatMongoDBDate(
                            bookingData[0].createdAt
                          )}   Full Name: ${
                            bookingData[0].fullName
                          }   Mobile Number ${bookingData[0].phone}`}
                    </MDBCardText>

                    {bookingData.length == 0 ? (
                      <button className="btn btn-primary mr-2 px-4">
                        {" "}
                        <Link to='/tour' style={{color:"white"}}> book now</Link>
                       
                      </button>
                    ) : (
                      <button className="btn btn-primary mr-2">
                        {" "}
                        get details
                      </button>
                    )}

                    { bookingData.length == 0 ? 
                    
                   "" 
                    : 
                    
                    <button className="btn btn-danger mr-2"> cancel</button>
                    
                  }
                  </MDBCardBody>

                  <MDBAccordion
                    active={active}
                    onChange={(itemId) => setActive(itemId)}
                    style={{ width: "100%" }} // Set the width of the accordion
                  >
                    <MDBAccordionItem
                      collapseId={1}
                      headerTitle="View All Booking"
                    >
                
                    </MDBAccordionItem>
                  </MDBAccordion>
                </MDBCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
