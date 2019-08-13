import React from "react";

const APIurl = "http://api.openweathermap.org/data/2.5/weather?q=";
const APIkey = "&appid=d085c399bf66fa78d7dc5eb696097fd8";

let unit = "&units=metric";


class FetchCurrentFromApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //initial state
      weatherData: "", //[]
      cityName: "Oslo"
    };
  }

  //To get value from input field @  ./SearchCity.js
  onChangeCity(nameOfCity) {
    this.setState({
      cityName: nameOfCity
    });
  }

  componentDidMount() {
    fetch(APIurl + this.state.cityName + unit + APIkey)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let weatherData = data.weather.map(desc => {
          return (
            <div key={desc.weather}>
              <img
                className="weatherIcons"
                src={"http://openweathermap.org/img/w/" + desc.icon + ".png"}
                alt="weather_icons"
              />
              <p>
                Currently  {data.main.temp}&#8451; and {desc.description} in {data.name}, {data.sys.country}
              </p>
            </div>
          );
        });

        this.setState({ weatherData: weatherData });
        console.log("Link", this.state.cityName);
        console.log("state", this.state.weatherData);
      });
  }

  render() {
    return (
      <div className="container" id="textWeather">
        {this.state.weatherData}
        <h1 />
      </div>
    );
  }
}

export default FetchCurrentFromApi;
