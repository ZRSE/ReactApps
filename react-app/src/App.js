import React from "react";
import "./App.css";

//Component imports
import FetchCurrentFromApi from "./FetchCurrentFromApi";
import Navigation from "./Navigation";
import MainContent from "./MainContent";

//Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

import { Row, Col} from "react-bootstrap";
/*import Col from 'react-bootstrap/Col'*/

class App extends React.Component {
  render() {


    return (
      /*<Hello firstName='Zakarias' lastName='Røse'/>*/ 
      <Container className="mainCont">
        <Navigation name="Z's weatherapp" />

        
        <Row>
          <Col className="mainCols" lg="true" id="t1">
            <Navigation name="Z's weatherapp" />
          </Col>
        </Row>
        <Row>
          <Col sm className="mainCols" lg="true" id="t2" />
          <Col sm={8} className="mainCols" lg="true">
            <h2>
              <FetchCurrentFromApi weatherData />
            </h2>
          </Col>
          <Col sm className="mainCols" lg="true" />
        </Row>

        <MainContent />


      </Container>
    );
  }
}

export default App;
