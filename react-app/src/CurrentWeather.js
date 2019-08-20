import React from "react";

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
         weatherData: this.props.weatherData,
    };
  }

  render() {
    // console.log("currentWeather.js, weatherData: " + this.state.weatherData)
    console.log("CurrentWeather weatherData: ", this.props.weatherData)

    return (
      <div className="currentWeather"> 
        <h1>{this.props.weatherData}</h1>
      </div>
    );
  }
}

export default CurrentWeather;
