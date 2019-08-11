import React from "react";

class FetchFromApi extends React.Component {
  constructor() {
    super();
    this.state = {
      //initial state
      weatherData: []
    };
  }

  componentDidMount() {
    //const {handleForCity} = this.props.city;

    fetch(
      //'http://api.openweathermap.org/data/2.5/weather?q='`${handleForCity}&appid=d085c399bf66fa78d7dc5eb696097fd8`
      'http://api.openweathermap.org/data/2.5/weather?q=oslo&appid=d085c399bf66fa78d7dc5eb696097fd8'

    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let weatherData = data.weather.map(desc => {
          return (
            <div key={desc.weather}>
              <p>
                Currently {desc.description} in {data.name}, {data.sys.country}
              </p>
            </div>
          );
        });

        this.setState({ weatherData: weatherData });
        console.log("state", this.state.weatherData);
      });
  }

  render() {
    return (
      <div className="container" id="textWeather">
        {this.state.weatherData}
      </div>
    );
  }
}

export default FetchFromApi;
