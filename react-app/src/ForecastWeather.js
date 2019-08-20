import React from "react";
import FetchForecastFromApi from './FetchForecastFromApi';

class ForecastWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h1>
                    <FetchForecastFromApi />
                </h1>
            </div>
            
        )
    }
}

export default ForecastWeather;