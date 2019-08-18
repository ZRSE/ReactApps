import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

import { Col } from "react-bootstrap";

const APIurl = "https://api.openweathermap.org/data/2.5/forecast?q=";
const APIkey = "&appid=d085c399bf66fa78d7dc5eb696097fd8";
let unit = "&units=metric";
var city = "Oslo";

class FetchForecastFromApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //initial state
      forecastData: [],
      forecast: [],
      fiveDay: []
    };
  }

  //When component is inserted into tree, invoke this method
  componentDidMount() {
    //const {handleForCity} = this.props.city;
    fetch(APIurl + city + unit + APIkey)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let fiveDay = data.list.filter(reading =>
          reading.dt_txt.includes("12:00:00")
        );
        console.log("FiveDay", fiveDay);

        let forecastData = fiveDay.map(forecast => {
          return (
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>{Math.round(forecast.main.temp)}&#8451;</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <img
                    className="weatherIcons"
                    src={
                      "http://openweathermap.org/img/w/" +
                      forecast.weather[0].icon +
                      ".png"
                    }
                    alt="weather_icons"
                  />
                </Card.Subtitle>
                <Card.Text>{forecast.dt_txt}</Card.Text>

                <Card.Subtitle className="mb-2 text-muted" />
              </Card.Body>
            </Card>
          );
        });

        this.setState({
          forecastData: forecastData,
          fiveDay: fiveDay
        });
        console.log("state", this.state.forecastData);
        console.log("fiveday", this.state.fiveDay);
      });
  }

  /*fiveDayFormatting = () => {
    return this.state.fiveDay.map(reading, index) 
  }*/

  render() {
    return <div className="forecastData">{this.state.forecastData}</div>;
  }
}

export default FetchForecastFromApi;

//<img className="weatherIcons" src={"http://openweathermap.org/img/w/" + forecast.weather.icon + ".png"} alt="weather_icons" />

/*


<ul>
                <li key={forecast.dt}>
                  {forecast.dt_txt}
                  {forecast.main.temp} °C
                </li>
              </ul>


*/
