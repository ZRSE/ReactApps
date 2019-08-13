import React from "react";

import FetchForecastFromApi from "./FetchForecastFromApi";
import SearchCity from "./SearchCity";

import { Row, Col} from "react-bootstrap";
import Container from "react-bootstrap/Container";

//var city ='';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <Container>

        <SearchCity />
        <Row>
          <Col className="sCols" />
          <Col className="sCols">
            <FetchForecastFromApi forecastData />
          </Col>
          <Col className="sCols" />
        </Row>
      </Container>
    );
  }
}

export default MainContent;
