import React from 'react'
import './footer.css';

import {Container, Row, ListGroup, ListGroupItem, Col} from 'reactstrap';
import logo from '../../assets/images/logo.png';

import {Link} from "react-router-dom";



  const quick__links=[
    {path:'/home',
    display:'Home',
    },
  
    {path:'/about',
    display:'About',
    },
  
    {path:'/tour',
    display:'Tour',
    },
  ]

  const quick__links2=[
    
    {path:'/Login',
    display:'Login',
    },
    
    {path:'/register',
    display:'register',
  },
  {path:'/home',
  display:'gallery',
  }
  ]

const Footer = () => {

  const year =new Date().getFullYear();

  return (
   <>
   <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Effortlessly book your perfoct hotel with Travel world website and satisfying stay</p>
            <div className="social__links d-flex align-item-center gap-4">
              <span>
                <Link to='#'><i class='ri-youtube-line'></i></Link>
              </span>
              <span>
                <Link to='#'><i class='ri-github-line'></i></Link>
              </span>
              <span>
                <Link to='#'><i class='ri-facebook-line'></i></Link>
              </span>
              <span>
                <Link to='#'><i class='ri-instagram-line'></i></Link>
              </span>
              <span>
                <Link to='#'><i class='ri-whatsapp-line'></i></Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className="footer__quick-title">Pages</h5>
          <ListGroup className='footer__quick-link'>
            {quick__links.map((item,index) =>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
              ))}
          </ListGroup>
        </Col>


        <Col lg='3'>
        <h5 className="footer__quick-title">Discover</h5>
          <ListGroup className='footer__quick-link'>
            {quick__links2.map((item,index) =>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
              ))}
          </ListGroup>
        </Col>


        <Col lg='3'>
        <h5 className="footer__quick-title">contact</h5>
          <ListGroup className='footer__quick-link'>
              <ListGroupItem  className='ps-0 border-0  d-flex align-item-center gap-3 '>

                <h6 className='mb-0 d-flex align-item-center gap-2 '>
                  <span><i class='ri-map-pin-line'></i></span>
                  address:
                </h6>

                  <p className='mb-0'>changalpattu,chennai</p>
              </ListGroupItem>

              {/* --------------------------- */}

              <ListGroupItem  className='ps-0 border-0  d-flex align-item-center gap-3 '>

                <h6 className='mb-0 d-flex align-item-center gap-2 '>
                  <span><i class='ri-mail-line'></i></span>
                  mail:
                </h6>

                  <p className='mb-0'>abisingle450@gmail.com</p>
              </ListGroupItem>

                            {/* --------------------------- */}

              <ListGroupItem  className='ps-0 border-0  d-flex align-item-center gap-3 '>

                <h6 className='mb-0 d-flex align-item-center gap-2 '>
                  <span><i class='ri-phone-fill'></i></span>
                  number:
                </h6>

                  <p className='mb-0'>8220575572</p>
              </ListGroupItem>
          
          </ListGroup>
        </Col>

        <Col lg='12' className='text-center pt-5'>

              <p className="copyright">
                copyright {year}, design and developed by ABI .all rights reserved
              </p>

        </Col>

      </Row>
    </Container>

   </footer>
   </>
  )
};

export default Footer;