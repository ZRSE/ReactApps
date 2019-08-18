import React from "react";
import "./App.css";

//Component imports
import FetchCurrentFromApi from "./FetchCurrentFromApi";
import FetchForecastFromApi from "./FetchForecastFromApi";
import Navigation from "./Navigation";

//Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

//Bootstrap grid container, with navigation and current weather
class App extends React.Component {
  render() {
    return (
      <Container className="mainContainer">
        <Row className="navigationRow">
          <Col className="mainCols" lg="true" id="t1">
            <Navigation name="Z's weatherapp" />
          </Col>
        </Row>

        <Row className="searchRow">
          <Col sm className="sCols" lg="true" id="t2" />

          <Col sm={12} className="sCols" lg="true">
            <h2 id="">
              <FetchCurrentFromApi weatherData />
            </h2>
          </Col>

          <Col sm className="sCols" lg="true" />
        </Row>

        <Row className="forecastRow">
          <Col className="cards" md="auto">
            <FetchForecastFromApi fiveDay />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
//        <MainContent />
