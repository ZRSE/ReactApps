import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import FetchFromApi from './FetchFromApi';
import 'bootstrap/dist/css/bootstrap.css';

//Bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button';



class App extends React.Component {
  render() {
    return /*<Hello firstName='Zakarias' lastName='Røse'/>*/ (
     <Container id="textWeather">

       <Row>
       <Col lg="true" id="t1"><h1></h1></Col> 
       </Row>
       <Row>
       <Col lg="true"></Col> 
       </Row>
       <Row>
       <Col lg="true" id="t2"><h2><FetchFromApi weatherData /></h2></Col>
        </Row>

     </Container>
    )
  }
}

export default App;
