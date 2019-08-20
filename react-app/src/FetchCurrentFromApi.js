import React from "react";
import CurrentWeather from './CurrentWeather';


const APIurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIkey = "&appid=d085c399bf66fa78d7dc5eb696097fd8";

let unit = "&units=metric";

class FetchCurrentFromApi extends React.Component {
  constructor(props) {
    super(props);

    /*this.onChangeCity = this.onChangeCity.bind(this);*/
    this.CityChange = this.CityChange.bind(this);

    this.state = {
      //initial state
      cityName: this.props.cityName, //oslo
      weatherData: []
    };
  }

  CityChange() {
    this.componentDidMount();
  }

  // function: when form is "finished" ->     this.componentDidMount();

  fetchApi() {
    //console.log("CurrentWeatherFetch state (city): " + this.state.cityName);

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
                Currently {Math.round(data.main.temp)}&#176; and{" "}
                {desc.description} in {data.name}, {data.sys.country}
              </p>
            </div>
          );
        });

        this.setState({ weatherData: weatherData });
      });

    console.log(this.state.weatherData);
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    //const cityName = this.state.cityName;

    console.log("Cityname state of fetchCurrent: " + this.state.cityName);

    //console.log("Url atm: " + APIurl + this.state.cityName + unit + APIkey);

    //        {this.state.weatherData}

    return (
      <CurrentWeather weatherData={this.state.weatherData}/>
    );
  }
}

export default FetchCurrentFromApi;

//<h1> {this.state.weatherData} </h1>

/*<SearchCity
                onCityNameChange={this.onChangeCity}
                cityNameChange={this.CityChange}
              />*/

//Return
/*
<div className="container" id="textWeather">
        {this.state.weatherData}

        </div>*/
