import React from "react";

import { FormControl, Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";


import FetchForecastFromApi from "./FetchForecastFromApi";
import FetchCurrentFromApi from "./FetchCurrentFromApi";

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      cityName: "Madrid"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ cityName: event.target.value });

    /*console.log(event.target.value);*/
    //send eventTarget value som props med onCityNameChange
  }

  onSubmit(event) {
    alert("State cityName: " + this.state.cityName);
    event.preventDefault();
    //{this.props.fetchApi}

    //alert(this.state.cityName);
    //this.props.onCityNameChange(event.target.value);
    // this.props.cityNameChange();
  }

  render() {
    //const cityName = this.props.cityName;
    //                  value={this.state.value} onChange={this.onChange}

    //alert(this.state.cityName);
    //console.log("Cityname state in SearchCity: ", this.state.cityName)

    return (
      <div>
        <FetchCurrentFromApi cityName={this.state.cityName} />

        <Form onSubmit={this.onSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              value={this.cityName}
              onChange={this.onChange}
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
        <div />

        <FetchForecastFromApi cityName={this.state.cityName} />
      </div>
    );
  }
}

export default SearchCity;

//For testing: {this.state.cityName}
