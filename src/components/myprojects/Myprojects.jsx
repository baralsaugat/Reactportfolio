import React from 'react'
import {Container,Row, Col,Media} from 'react-bootstrap'
import portfolio from '../../assets/myportfolio.PNG';
import nottodolist from '../../assets/nottodolist.PNG';
import calculator from '../../assets/calculator.png';
import dronecontrol from '../../assets/dronecontrol.jpeg';
import "./myproject-style.css"




export const Myprojects = () => {
    return (<>
    <div className= "myProjects">
    <Container className = 'mt-5 fs-3' id= 'myProjects'>
        <Row>
            <Col>
            <h1 className= "text-info text-center">
            My Projects
            </h1>
            </Col>
        </Row>
        <ul className="list-unstyled">
  <Media as="li">
    <img
      width={450}
      height={350}
      className="mr-3 border border-info"
src= {portfolio}
      alt="My Portfolio"
    />
    <Media.Body>
      <h3>My Portfolio</h3>
      <p className= "fst-italic">Tech: HTML, CSS, React-Bootstrap and React.JS</p>
      <p>
        About: This is my personal website showcasing my skills and experiences. 
      </p>
      
    </Media.Body>
  </Media>

  <Media as="li">
    
  
    <Media.Body>
      <h3>Not To Do List App</h3>
      <p className= "fst-italic">Tech: HTML, CSS, React-Bootstrap and React.JS</p>
      <p>
       About: This app was designed to save the lost times due to unwanted activities. 
      </p>
     
    </Media.Body>
    <img
      width={450}
      height={350}
      className="mr-3 border border-info"
      src= {nottodolist}
      alt="Not To Do List App"
    />
    
    
  </Media>

  <Media as="li">
    <img
      width={450}
      height={350}
      className="mr-3 border border-info"
      src = { calculator}
      alt="Prank Calculator"
    />
    <Media.Body>
      <h3>Prank Calculator</h3>
      <p className= "fst-italic">Tech: HTML, CSS, React-Bootstrap and React.JS</p>
      <p>
        About: This app was created to prank the friends in calculation. It was designed such that it only gives 70% of the accurate answer and rest 30% wrong ones.
      </p>
      
    </Media.Body>
  </Media>
  <Media as="li">
  
    <Media.Body>
      <h3>Cloud Enabled Autonomous Drone Control Using Wireless Sensors</h3>
      <p className= "fst-italic">Tech: Python, AWS, Reverse-SSH</p>
      <p>
        About: This was a university final year project where a team of five including me had controlled a drone remotely using cloud system.

      </p>
     
      <p className = "f">Achievement: Received Gold Medal</p>
    </Media.Body>

    <img
      width={450}
      height={350}
      className="mr-3 border border-info"
      src= {dronecontrol}
      alt="dronecontrol"
    />
  </Media>
</ul>

    </Container>
    </div>
    

    </>
        
    )
}
