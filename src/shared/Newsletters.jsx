import React from 'react'
import './newsletters.css';


import { Container, Row ,Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletters = () => {
  return (
    <section className='newsletter' >
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe to receive travel information and updates!</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder='Email'  className='email_input'  />
                            <button className="btn newsletter__btn">send</button>
                        </div> 
                      </div>
                        </Col>
                    <Col lg="6">
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
              
            </Row>
        </Container>
    </section>
  )
}

export default Newsletters