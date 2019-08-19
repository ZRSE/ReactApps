import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

import SearchCity from "./SearchCity";

import moment from "moment";

const APIurl = "https://api.openweathermap.org/data/2.5/forecast?q=";
const APIkey = "&appid=d085c399bf66fa78d7dc5eb696097fd8";
let unit = "&units=metric";
var city = "Oslo";

class FetchForecastFromApi extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      //initial state
      error: null,
      isLoaded: false,
      cityName: props.cityName,

      forecastData: [],
      forecast: [],
      fiveDay: []
    };

  }




  //When component is inserted into tree, invoke this method
  componentDidMount() {
    console.log("ForecastWeatherFetch state (city): " + this.state.cityName);

    //const {handleForCity} = this.props.city;
    console.log("URL: ", APIurl + this.state.cityName + unit + APIkey)
    fetch(APIurl + this.state.cityName + unit + APIkey)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let fiveDay = data.list.filter(day =>
          day.dt_txt.includes("12:00:00")
        );

        let forecastData = fiveDay.map(forecast => {
          let newDate = new Date();
          const weekday = forecast.dt * 1000;
          newDate.setTime(weekday);


       

         

          return (

            
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>{Math.round(forecast.main.temp)}&#176;</Card.Title>
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
                <Card.Subtitle className="mb-2 text-muted">{forecast.weather[0].description}</Card.Subtitle>

                <Card.Text className="font-weight-bold">{moment(newDate).format("dddd")}</Card.Text>
                <Card.Text>{moment(newDate).format("MMMM, Do")}</Card.Text>

              </Card.Body>
            </Card>

              
               
          );
        });

        this.setState({
          forecastData: forecastData,
          fiveDay: fiveDay,


          isLoaded: true

        });
        
      });

      
  }

  


  render() {
    const { error, isLoaded, forecastData } = this.state;

    console.log("Forecast, cityName value:" + this.state.cityName);
    

    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading weather..</div>;
    } else {

     
     
      return (
        
        <div className="forecastData">


          <h1>{this.state.forecastData.name}</h1>
          {this.state.forecastData}
        </div>
      );
    }
  }
}

export default FetchForecastFromApi;

/*componentDidMount() {
  //const {handleForCity} = this.props.city;
  fetch(APIurl + city + unit + APIkey)
    .then(results => {
      return results.json();
    })
    
    .then(data => {
      let fiveDay = data.list.filter(reading =>
        reading.dt_txt.includes("12:00:00")
      )

      console.log(fiveDay);

      this.setState({
        isLoaded: true,
        fiveDay: this.fiveDay.map(forecast => ({
          
        })),

        /*forecastData: forecastData,

        
      });

      
     
      

     

      console.log("Forecasts", this.state.fiveDay);
     /* console.log("state", this.state.forecastData);
      console.log("fiveday", this.state.fiveDay);
    });
}*/
