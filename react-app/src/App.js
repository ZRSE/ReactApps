import React from "react";
import "./App.css";

//Component imports

import Navigation from "./Navigation";
import SearchCity from "./SearchCity";

import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';


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
          </Col>

          <Col sm className="sCols" lg="true">
            <SearchCity      onCityNameChange={this.onChangeCity}
              cityNameChange={this.CityChange}/>
          </Col>
        </Row>

        <Row className="forecastRow">

          <Col className="cards" md="auto">

          </Col>

          <Col className="cards" md="auto">
          </Col>

          <Col className="cards" md="auto">
            
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default App;
//        <MainContent />


// <FetchCurrentFromApi weatherData  />

//<FetchForecastFromApi cityName />