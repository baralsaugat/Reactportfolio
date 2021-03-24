import React from 'react';
import './skills-style.css'
import {Row, Col, Container} from 'react-bootstrap';

export const Skillset = () => {
    return (
        <Container className= ' mt-5' id = 'Skills'>
           <Row >
               <Col className = ' skills text-info'>
                   <h1>Skills</h1>
               </Col>
           </Row>
           <Row className= " fs-5 justify-content-between d-flex flex-wrap">
               
                   <Col><i id= 'html' class="fab fa-html5"   ></i>HTML</Col>
                   <Col><i id= 'css' class="fab fa-css3-alt"></i>CSS </Col>
                   <Col><i id= 'javascript' class="fab fa-js"></i>Java Script </Col>
                   <Col><i id= 'github' class="fab fa-github"></i>GitHub </Col>
                   <Col><i id= 'python' class="fab fa-python"></i>Python</Col>
                   <Col><i id = 'react'class="fab fa-react"></i>React.JS </Col>
                   <Col><i id= 'node' class="fab fa-node"></i>Node.JS </Col>
                   <Col><i id = 'networking' class="fas fa-network-wired"></i>Networking </Col>
     
           </Row>
        </Container>
    )
}
