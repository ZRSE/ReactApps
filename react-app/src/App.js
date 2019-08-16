import React from "react";
import "./App.css";

//Component imports
import FetchCurrentFromApi from "./FetchCurrentFromApi";
import FetchForecastFromApi from "./FetchForecastFromApi";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
import SearchCity from "./SearchCity";


//Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";


//Bootstrap grid container, with navigation and current weather
class App extends React.Component {
  render() {
    return (
      <Container className="mainCont">
        <Row>
          <Col className="mainCols" lg="true" id="t1">
            <Navigation name="Z's weatherapp" />
          </Col>
        </Row>

        <Row>
          <Col sm className="sCols" lg="true" id="t2" />

          <Col sm={8} className="sCols" lg="true">
            <h2 id="">
            <FetchCurrentFromApi weatherData />

            </h2>
          </Col>

          <Col sm className="sCols" lg="true" />

        </Row>

        <Row>
          <Col sm className="mainCols" lg="true" />
          <Col sm={5} className="mainCols" > <FetchForecastFromApi/></Col>
          <Col sm className="mainCols" lg="true" />
        </Row>
      </Container>
    );
  }
}

export default App;
//        <MainContent />
