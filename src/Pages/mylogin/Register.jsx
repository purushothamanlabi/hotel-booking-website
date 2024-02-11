import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "./../../context/authContext.js";
import { BASE_URL } from "./../../utils/config.js";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const Register = () => {
  const [credentials, setcredentials] = useState({
    email: undefined,
    password: undefined,
    userName: undefined,
  });

  const { dispatch } = useContext(Authcontext);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setcredentials((pre) => ({ ...pre, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (res.ok) {
        // Success case
        toast.success("registered successfully")
        dispatch({ type: "REGISTER_SUCCESS" });
        Navigate("/login");
      } else {
        // Error case
        toast.warn(result.message)
        // alert();
      }
    } catch (err) {
      toast.error(err.message)
      // alert(err.message);
    }
  };

  return (
    <>
      <div className="flex_form mt-2">
        <div className="form-container">
          <div className="logo-container"> Sign up</div>
          <form className="form" onSubmit={handleClick}>
            <div className="form-group">
              <label htmlFor="userName">Username</label>

              <input
                type="text"
                placeholder="userName"
                required
                id="userName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                required=""
                placeholder="Enter your email"
                name="email"
                id="email"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                required=""
                name="password"
                placeholder="Enter your password"
                id="password"
                type="password"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="form-submit-btn">
              Sign In
            </button>
          </form>

          <p className="">
            <p className="navigate_to">
              already have an account{" "}
              <Link className="link" to="/login">
                {" "}
                login
              </Link>{" "}
            </p>
            <div class="social-buttons"></div>
            <button class="social-button facebook">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
              </svg>
              <span>Sign in with Facebook</span>
            </button>
          </p>

       
        </div>
      </div>
    </>
  );
};

export default Register;
