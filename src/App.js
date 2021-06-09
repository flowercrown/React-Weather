//import logo from './logo.svg';
import './App.css';
import Weather from './app_component/weather.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
import API_key from './api_key/apiKey'
import Form from './app_component/form.component'

import React from 'react';

class App extends React.Component{
  //state ={ }
  constructor(){
    super();
    this.state = {

      city: undefined,
      country: undefined,
      icon : undefined,
      main : undefined,
      celsius : undefined,
      temp_max : undefined,
      temp_min : undefined,
      description : "",
      error : false 

    };
    
    //this.getWeather();
    
    this.weatherIcon = {
      Thunderstorm : "wi-thunderstorm",
      Drizzle : "wi-sleet",
      Rain : "wi-storm-showers",
      Snow : "wi-snow",
      Fog : "wi-fog",
      Clear : "wi-day-sunny",
      Cloudy : "wi-day-fog"
    };
  }

  getCelsius(faren){
    let cel = Math.floor(faren - 273.15);
    return cel;
  }

  getIcon(weatherId){
    switch(true){
      case weatherId >=200 && weatherId <300:
        this.setState({icon: this.weatherIcon.Thunderstorm});
        break;
      case weatherId >=300 && weatherId <400:
          this.setState({icon: this.weatherIcon.Drizzle});
          break; 
      case weatherId >=500 && weatherId <600:
        this.setState({icon: this.weatherIcon.Rain});
        break;
      case weatherId >=600 && weatherId <700:
          this.setState({icon: this.weatherIcon.Snow});
          break;
      case weatherId >=700 && weatherId <800:
        this.setState({icon: this.weatherIcon.Fog});
        break;
      case weatherId >=800 && weatherId <=900:
          this.setState({icon: this.weatherIcon.Cloudy});
          break;
      default:
        this.setState({icon: this.weatherIcon.Clear});
    }
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city&&country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}
    `);

    //convert data to json format
    const response = await api_call.json();

    console.log(response);

    this.setState({
      city : `${response.name}, ${response.sys.country}`,
      celsius : this.getCelsius(response.main.temp),
      temp_max : this.getCelsius(response.main.temp_max),
      temp_min : this.getCelsius(response.main.temp_min),
      description : response.weather[0].description,
      icon : this.weatherIcon.Thunderstorm
    })
    
    this.getIcon(response.weather[0].id);
  }
  else{
    this.setState({error:true});
  }
    
  }

  render(){
    return(
      <div className="App">
      <Form loadweather = {this.getWeather} error={this.state.error}/>
      {<Weather 
        city={this.state.city}
        country={this.state.country}
        celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
      />}
      </div>
    );
  }
}

//function App() {
//  return (

//  );
//}

export default App;
