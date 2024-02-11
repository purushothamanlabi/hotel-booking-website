import {
  CButton,
  CContainer,
  CCollapse,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CDropdownDivider,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  // COffcanvasFooter,
} from '@coreui/react';


// import './header.css';

import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { useEffect, useRef, useContext } from "react";
import { Authcontext } from "./../../context/authContext";
import { useState } from "react";

const nav__links = [
  { path: "/home", display: "Home" },

  { path: "/about", display: "about" },

  { path: "/tour", display: "hotels" },
];

const Header = () => {
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

  const headerref = useRef(null);
  const menuref = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Authcontext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFun = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerref.current.classList.add("sticky__header");
      } else {
        headerref.current.classList.remove("sticky__header");
      }
    });
  };



  useEffect(() => {
    stickyHeaderFun();
    return window.removeEventListener("scroll", stickyHeaderFun);
  });

  const toggleMenu = () => menuref.current.classList.toggle("display__menu");

  const [visible, setVisible] = useState(false);

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const container =
    window !== undefined ? () => window().document.body : undefined;

  if (windowWidth >= 992) {
    return (
      <header className="header" ref={headerref}>
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
              {/* ============================ logo===================== */}

              <div className="logo">
                <img src={logo} alt="" />
              </div>

              {/* ===================   menu    ====================== */}

              <div className="navigation" ref={menuref} onClick={toggleMenu}>
                <ul className="menu d-flex align-items-center gap-4 mr-4">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ===================  Login and Registe ====================== */}

              <div className="nav__right d-flex align-item-center gap-6 pl-1">
                <div className="nav__btns d-flex align-item-center gap-2 pl-1">
                  {user ? (
                    <>
                    <h5 className="login-logo  mt-1 w-7 h-5">
                        <img
                          // width="48"
                          // height="48"
                          src="https://img.icons8.com/color/48/user-male-circle--v1.png"
                          alt="user-male-circle--v1"
                        />
                      </h5>

                      <h5 className="mb-0 pr-3 profile_link pt-1 d-flex align-item-center pt-2">
                        {" "}
                        <Link
                         style={{ textDecoration: "none",color:"blue",fontSize:"1.2rem " }}
                          to={`/home/profile/${user._id}`}
                        >
                          {user.username}
                        </Link>
                      </h5>

                      <Button className="btn btn-dark logout_btn" style={{backgroundColor:"black"}} onClick={logout}>
                        logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className="btn secondary__btn">
                        <Link to="/login"> Login</Link>
                      </Button>
                      <Button className="btn primary__btn">
                        <Link to="/register"> Register</Link>
                      </Button>
                    </>
                  )}
                </div>
                {/* ---------------------------------------------------------- */}

                <span className="mobile__menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    );
  } else {
    return <header className="header " ref={headerref}>
  <CNavbar colorScheme="light" className="bg-light w-100 h-100 shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
      <CContainer fluid className='h-100'>
       <img src={logo} style={{width:"auto",height:"100%",filter: "none"}} alt="" />
        <CNavbarToggler
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        />
        <COffcanvas
          id="offcanvasNavbar"
          placement="end"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: '70%', textAlign: 'center' }}
        >
        <COffcanvasHeader>
        <div className="nav__btns d-flex align-item-center gap-2 pl-2">
                  {user ? (
                    <>
                      <h5 className="login-logo">
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/color/48/user-male-circle--v1.png"
                          alt="user-male-circle--v1"
                        />
                      </h5>
                      <h5 className="mb-0 pr-3 profile_link pt-1 d-flex align-item-center ">
                        {" "}
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/home/profile/${user._id}`}
                        >
                          {user.username}
                        </Link>
                      </h5>

                      {/* <Button className="btn btn-dark" onClick={logout}>
                        logout
                      </Button> */}
                    </>
                  ) : (
                    <>
                      <Button className="btn secondary__btn">
                        <Link to="/login"> Login</Link>
                      </Button>
                      <Button className="btn primary__btn">
                        <Link to="/register"> Register</Link>
                      </Button>
                    </>
                  )}
                </div>
          <CCloseButton className="text-reset " onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CNavbarNav style={{}}>
            <CNavItem >
              <CNavLink   >
                <Link to={nav__links[0].path}>{nav__links[0].display}</Link>
                
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  >
              <Link className='res_nav' to={nav__links[1].path}>{nav__links[1].display}</Link>
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  >
              <Link className='res_nav' to={nav__links[2].path}>{nav__links[2].display}</Link>
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  >
              <Link className='res_nav'to={nav__links[0].path}>Contact</Link>
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  >
              <Link className='res_nav' to={nav__links[0].path}>gallary</Link>
              </CNavLink>
            </CNavItem>
          </CNavbarNav>


          {/* // here i want another item aut i should end of the flex item ( set bottum  ) */}
          
         
        </COffcanvasBody>
        <div className="mt-auto mb-10 ">
        {user?  <button  className=" logout_btn "  onClick={logout}>
                      Logout
                    </button>:""}
            </div>
       
      </COffcanvas>
    </CContainer>
  </CNavbar>

    

    </header>;
  }
};

export default Header;
