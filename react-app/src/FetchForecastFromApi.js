import React from "react";


const APIurl =  'http://api.openweathermap.org/data/2.5/forecast?q=';
const APIkey =  '&appid=d085c399bf66fa78d7dc5eb696097fd8';
let unit = '&units=metric'
var city = 'Oslo';


class FetchForecastFromApi extends React.Component {
  constructor() {
    super();
    this.state = {
      //initial state
      forecastData: [],
      forecast: []
      
    };
  }



  componentDidMount() {
    //const {handleForCity} = this.props.city;
    fetch( APIurl + city + unit + APIkey )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let forecastData = data.list.map(desc => {
          return (
            <div key={desc.list}>
                <ul >
                    <li key={desc.dt}> {desc.dt_txt} {desc.main.temp} °C</li>
                </ul>
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
        <ul>
        {this.state.forecastData}
        </ul>
      </div>
    );
  }
}

export default FetchForecastFromApi;
