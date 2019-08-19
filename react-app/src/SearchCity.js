import React from "react";

import { FormControl, Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

class SearchCity extends React.Component {
  constructor(props) {
    super(props);

    //Initial state
    this.state = {
      // cityName: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.cityNameChange(event.target.value);
  }

  onChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.props.onCityNameChange(event.target.value);
  }

  render() {
    const cityName = this.props.cityName;
    //                  value={this.state.value} onChange={this.onChange}

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              value={cityName}
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
      </div>
    );
  }
}

export default SearchCity;

//For testing: {this.state.cityName}
