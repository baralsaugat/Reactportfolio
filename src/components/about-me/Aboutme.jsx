import React from 'react'
import {Media, Row, Col, Container} from 'react-bootstrap'
import pic from '../../assets/myprojectpic.jpg'

export const Aboutme = () => {
    return (
        <>
        <div className= ' bg-info text-dark'>
        <Container className='mt-5' id = 'about'>
        <Row>
        <Col className='text-dark text-center'>
        <h1>About Me</h1>
        </Col>
    </Row>
<Media>
    
  <img
    width={400}
    height={400}
    className="mr-3"
    src={pic}
    alt="pic with laptop"
  />
  <Media.Body >
    
    <p >
     I am a diligent, devoted and disciplined developer determined to inscribe my marking in the field of software development. I am creative, unorthodox and optimistic to perform my job.  
     
    </p>
    <p>
    My key strengths are programming, networking, cyber security and data analytics. I have an intermediate level skills on HTML, CSS, Javascript, React.js, Node.js, Python, Linux.
    </p>
    <p>
      I am a graduate with degree in Master of Networking(Cyber Security) from Melbourne Institute of Technology. In addition to grow my skills, I have completed 14 weeks full stack web development course offered by dented-code.
  </p>
  <p>
    I had gained good experience on communication, understanding beneficiaries needs and psychology, importance of team work and work division, value of deadline from my past experiences. 
  </p>
  </Media.Body>
</Media>
</Container>
</div>
</>
    )
}
