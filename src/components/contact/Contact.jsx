import React from 'react'
import {Container, Row, Col}from 'react-bootstrap'

export const Contact = () => {
    return (
        <div>
            <Container className = ' mt-5' id = ' contact'>
                <Row>
                    <Col>
                    <h1 className= 'text-info text-center'>Contact</h1>
                    </Col>
                </Row>
                <Row className='fs-4 mb-5'>
                    <Col>
                <i class="fab fa-facebook-square text-primary"></i> <a className= 'text-dark' href="https://www.facebook.com/sahaj.baral">Facebook</a>
                </Col>
                    <Col>
                    <i class="fab fa-linkedin-in text-primary"></i> <a className= 'text-dark' href="https://www.linkedin.com/in/saugat-baral-3491776b/">Linked-in</a>
                </Col>
                    <Col>
                    <i class="fab fa-github "></i> <a className= 'text-dark' href="https://github.com/baralsaugat">GitHub</a>
                </Col>
                    <Col>
                    <i class="fab fa-twitter text-primary"></i> <a className= 'text-dark' href="">Twitter</a>
                </Col>
                    <Col>
                    <i class="fas fa-envelope"></i> <a className= 'text-dark' href="mailto:baralsaugat@gmail.com">Mail Me</a>
                    </Col>
                   
                    
                    <Col>
                    <i class="fas fa-phone"></i> <a className= 'text-dark' href="tel: +61452406300">Contact Me</a>
                </Col>
                  
                    
                </Row>
            </Container>
        </div>
    )
}
