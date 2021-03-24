import React from 'react'

import {Navbar, Form, Button, FormControl, Nav} from 'react-bootstrap'
import './Navigator-style.css'
import logo from '../../assets/logo.png';

export const Navigator = ()  => {
    return (
        <>
        <Navbar bg="info"   >
          <Navbar.Brand id = 'logo' href="#home">
              <img src={logo} width= '40px' alt="logo"/>
          </Navbar.Brand >
          <Nav className="mr-auto " >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#myProjects">My Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
          
        </Navbar>
      
      </>
    )
}
