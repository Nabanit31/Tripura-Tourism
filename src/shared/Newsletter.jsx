import React from 'react'
import './newsletter.css'
import { Container,Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe Now</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email' />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus quas vel, iure, numquam reiciendis unde sapiente 
                        laudantium maiores est amet ut! Adipisci et assumenda laboriosam quis
                        pariatur perferendis ipsa quia!</p>
                    </div>

                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter