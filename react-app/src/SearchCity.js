import React from "react";

import { Row, Col, FormControl, Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";


class SearchCity extends React.Component {
  constructor(props) {
    super(props);

    //Initial state

    this.state = {
      cityName: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    alert("Cityname: " + this.state.value);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }


  render() {

    const cityName = this.props.cityName;

    return (
      <Row>
        <Col sm className="sCols" />
        <Col sm={6} lg={4} className="searchCol">
          <div>
            <Form onSubmit={this.onSubmit}>
              <InputGroup className="mb-3">
                <FormControl
                  value={this.state.value} onChange={this.onChange} 
                  placeholder="Enter city"
                  aria-label="cityName"
                  aria-describedby="basic-addon2"
                  type="text"
                  name="city"
                />
                <InputGroup.Append>
                  <Button variant="primary" type="submit" value="submit">     
                    {" "}
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </div>
        </Col>
        <Col sm className="sCols" />
      </Row>
    );
  }
}




export default SearchCity;

//For testing: {this.state.cityName}
