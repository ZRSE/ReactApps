import React from "react";
import "./App.css";

//Component imports
import Hello from "./Hello";
import FetchFromApi from "./FetchFromApi";
import Navigation from "./Navigation";

//Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
/*import Col from 'react-bootstrap/Col'*/

class App extends React.Component {
  render() {
    return (
      /*<Hello firstName='Zakarias' lastName='Røse'/>*/ <Container>
        <Navigation name="Z's weatherapp" />

        <Row>
          <Col lg="true" id="t1">
            <h1 />
          </Col>
        </Row>
        <Row>
          <Col lg="true" />
        </Row>
        <Row>
          <Col lg="true" id="t2">
            <h2>
              <FetchFromApi weatherData />
            </h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
