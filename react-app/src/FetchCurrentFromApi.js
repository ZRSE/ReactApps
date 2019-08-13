import React from "react";
import SearchCity from "./SearchCity";

const APIurl =  'http://api.openweathermap.org/data/2.5/weather?q=';
//const city
const APIkey =  '&appid=d085c399bf66fa78d7dc5eb696097fd8';
//var city = '${this.state.cityName}';


class FetchCurrentFromApi extends React.Component {
  constructor() {
    super();


    this.state = {
      //initial state
      weatherData: "", //[]
      cityName: "Oslo",
      
    };



  }

  //To get value from input field @  ./SearchCity.js
  onChangeCity(nameOfCity) {
    this.setState({
      cityName: nameOfCity
    })
  }

  componentDidMount() {
    fetch(
      APIurl + this.state.cityName + APIkey

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
        //console.log("Link", +'${' + this.state.cityName + '}');
        console.log("Link", this.state.cityName);
        console.log("state", this.state.weatherData);
      });
      
      
  }

  render() {
    return (
      <div className="container" id="textWeather">
        {this.state.weatherData}
        <h1></h1>
      </div>
    );
  }
}

export default FetchCurrentFromApi;
