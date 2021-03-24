import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

import {Navigator} from './components/home/Navigator';
import {Herotext} from './components/home/Herotext'
import { Skillset } from './components/skillset/Skillset';
import {Aboutme} from './components/about-me/Aboutme'
import { Myprojects } from './components/myprojects/Myprojects';
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'


function App() {
  return (
    <>
      <Row>
        <Col> 

       <Navigator/>

        </Col>
      </Row>
      <Row>
        <Col>
  
        <Herotext/>
        
        </Col>
      </Row>
      <Row>
        <Col>
          <Skillset/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Aboutme/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Myprojects/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Contact/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Footer/>
        </Col>
      </Row>
      </>
  
  );
}

export default App;
