import React from "react";


import { Row, Col, FormControl, Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

var city ='';

class SearchCity extends React.Component {
  constructor() {
    super();

    this.state = {
        cityName: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    

  }

  onSubmit(e) {
    e.preventDefault();
    city = this.city;
    
    //console.log(city.value);
    let cityName = city.value;
    this.setState({cityName: cityName})
    console.log("Cityname in SearchCity: ", this.state.cityName)


  }

  render() {

    return (
       
        <Row>
          <Col sm className="sCols">For testing: {this.state.cityName}</Col>
          <Col sm={6} lg={4} className="searchCol">
            <div>
              <Form>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter city"
                    aria-label="cityName"
                    aria-describedby="basic-addon2"
                    type="text"
                    ref={cityName => (this.city = cityName)}
                    name="city"
                  />
                  <InputGroup.Append>
                    <Button variant="primary" onClick={this.onSubmit} >
                      {" "}
                      Search
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </div>
          </Col>
          <Col sm className="sCols">

              
          </Col>
        </Row>

      
    );
  }
}

export default SearchCity;
