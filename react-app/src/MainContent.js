import React from "react";

import { Row, Col, FormControl, Button, Form } from "react-bootstrap";
import FetchFromApi from "./FetchFromApi";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  onSubmit(e) {
    e.preventDefault();
    var city = this.city;
    //|| city.value;
    console.log(city.value);

  }


  

  render() {


    return (
      <Container>
        <Row>
          <Col className="mainCols" lg="true" id="t1">
            <Navigation name="Z's weatherapp" />
          </Col>
        </Row>
        <Row>
          <Col sm className="mainCols" lg="true" id="t2" />
          <Col sm={8} className="mainCols" lg="true">
            <h2>
              <FetchFromApi weatherData />
            </h2>
          </Col>
          <Col sm className="mainCols" lg="true" />
        </Row>

        <Row>
          <Col />
          <Col sm={6} lg={4} className="searchCol">
            <div>

              <Form>
              <InputGroup  className="mb-3">
                <FormControl
                  placeholder="Enter city"
                  aria-label="cityName"
                  aria-describedby="basic-addon2"
                  type="text"
                  ref={(cityName) => this.city = cityName} name="city"
                />
                <InputGroup.Append>
                  <Button variant="primary" onClick={this.onSubmit}> Search</Button>
                </InputGroup.Append>
              </InputGroup>
              </Form>
            </div>
          </Col>
            
          <Col />
        </Row>

      </Container>
    );
  }
}

export default MainContent;
