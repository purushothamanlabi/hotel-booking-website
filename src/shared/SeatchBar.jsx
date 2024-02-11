import React, { useEffect, useRef, useState } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "./../utils/config.js";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";




import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const SeatchBar = () => {
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
 
  const locationRfe = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();
  const searchhandler = async (event) => {

    event.preventDefault();
    const location = locationRfe.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    console.log(location,distance,maxGroupSize);

    if (location === "" || distance === "" || maxGroupSize === "") {
      return toast.info("all must");
    }
    const res = await fetch(
      `${BASE_URL}/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) toast.error("somthing went worng ");
    const result = await res.json();

    navigate(
      `/tour/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };


  if (windowWidth >= 578) {
    return (
      <Col lg="30">
        <div className="search-bar">
          <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast  ">
              <span>
                <i class="ri-map-pin-line"></i>
              </span>
              <div>
              <h6>Location</h6>
                <input
                  type="text"
                  placeholder="Where are you going"
                  ref={locationRfe}
                />
              </div>
            </FormGroup>

            <FormGroup className="d-flex gap-3 form__group form__group-last">
              <span>
              <i class="ri-wallet-2-line"></i>
              </span>
              <div>
              <h6>Price</h6>
                <input
                  type="number"
                  placeholder="Enter price Range" 
                  ref={distanceRef}
                />
              </div>
            </FormGroup>

            <FormGroup className="d-flex gap-3 form__group form__group-last">
              <span>
                <i class="ri-group-line"></i>
              </span>
              <div>
              <h6>Group</h6> 
                <input
                  type="number"
                  placeholder="Max people in group"
                  ref={maxGroupSizeRef}
                />
              </div>
            </FormGroup>
            <h6>Search</h6>

            <span
              className="search__icon"
              type="submit"
              onClick={searchhandler}
            >
              <i class="ri-search-line"></i>
            </span>
          </Form>
        </div>
      </Col>
    );
  } else {
    return (
      <>
       
        <Col lg="12" md="12" sm="12" xs="12">
          <div className="search-bar">
            <Form className="d-flex align-items-center gap-4 w-100 pr-1 justify-content-center" onSubmit={searchhandler}>
              <Box>
                <div className="search_container ">
                  <span>
                    {" "}
                    <i class="ri-map-pin-line"></i>{" "}
                  </span>
                  <div className="search_input">
                  <h6 className="pl-1">Location</h6>
                    <Input
                      type="text"
                      placeholder="Where are you going"
                      innerRef={locationRfe}
                    />
                  </div>
                </div>
                <div className="search_container ">
                  <span>
                    {" "}
                    <i class="ri-wallet-2-line"></i>{" "}
                  </span>
                  <div className="search_input">
                  <h6 className="pl-1">Price</h6>
                <Input
                  type="number"
                  placeholder="Enter price Range" 
                  innerRef={distanceRef}
                    />
                  </div>
                </div>
                <div className="search_container ">
                  <span>
                    {" "}
                    <i class="ri-group-line"></i>{" "}
                  </span>
                  <div className="search_input">
                  <h6 className="pl-1">Group</h6> 
                    <Input
                      type="number"
                      placeholder="Max people in group"
                      innerRef={maxGroupSizeRef}
                    />
                  </div>
                </div>
              </Box>

              <div className="search_btn_s mb-2 ml-11">
                <Stack direction="row" spacing={2}>
                  <Button  style={{width:"200px"}}
                    variant="contained"
                    // endIcon={<SendIcon />}
                    size="large"
                    type="submit"
                    // onClick={searchhandler}
                  >
                    Search
                  </Button>
                </Stack>
              </div>
            </Form>
          </div>
        </Col>
      </>
    );
  }
};

export default SeatchBar;
