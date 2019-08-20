import React from "react";
import FetchCurrentFromApi from "./FetchCurrentFromApi";


class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherData: this.props.weatherData,
        }
    }

    render(){

        console.log("currentWeather.js, weatherData: " + this.state.weatherData)

        return (
            <div>
                <h1>
                    <FetchCurrentFromApi />
                </h1>
            </div>

        )
    }
}

export default CurrentWeather;