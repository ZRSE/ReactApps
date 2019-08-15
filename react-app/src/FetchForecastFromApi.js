import React from "react";
import Card from "react-bootstrap/Card";

const APIurl = "http://api.openweathermap.org/data/2.5/forecast?q=";
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
        let forecastData = data.list.map(forecast => {
          return (
            <div key={forecast.list}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{forecast.main.temp}&#8451;</Card.Title>
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

                  <Card.Subtitle className="mb-2 text-muted">
                    Oslo
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          );
        });

        this.setState({ forecastData: forecastData });
        console.log("state", this.state.forecastData);
      });
  }

  render() {
    return (
      <div className="container" id="textWeather">
        <ul>{this.state.forecastData}</ul>
      </div>
    );
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
