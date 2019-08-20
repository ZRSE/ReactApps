import React from "react";

import { FormControl, Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

import FetchForecastFromApi from "./FetchForecastFromApi";
import FetchCurrentFromApi from "./FetchForecastFromApi";

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      cityName: 'Bergen'
      
    };


    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    /*event.preventDefault();*/
    /*console.log(event.target.value);*/
     //send eventTarget value som props med onCityNameChange

    

  }

  onSubmit(event) {
    //alert(this.state.cityName);
    //this.props.onCityNameChange(event.target.value);
    this.setState({ cityName: event.target.value });
    event.preventDefault();
   // this.props.cityNameChange();
  }


  render() {
    //const cityName = this.props.cityName;
    //                  value={this.state.value} onChange={this.onChange}

    //alert(this.state.cityName);
    console.log("Cityname state in SearchCity: ", this.state.cityName)


    return (
      <div>




        <Form onSubmit={this.onSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              value={this.state.value}
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

          
      <FetchForecastFromApi cityName={this.state.cityName} cityNameChange={this.CityChange} />

      </div>
    );
  }
}

export default SearchCity;

//For testing: {this.state.cityName}
