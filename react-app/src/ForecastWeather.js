import React from "react";

class ForecastWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        forecastData: this.props.forecastData,
    };

}

  render() {

    console.log("state forecastdata ", this.props.forecastData);

    return (
    <div className="forecastData">
        {this.props.forecastData}
    </div>
    );
  }
}

export default ForecastWeather;
