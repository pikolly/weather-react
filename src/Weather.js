import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Main from "./Main";
import Info from "./Info";
import Forecast from "./Forecast";



export default function Weather(props) {
  const [weatherData, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showResponse(response) {
      setWeather({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      //date: new Date(response.data.dt * 1000),
    });
  }
   function handleSubmit(event) {
    event.preventDefault();
     search();
  }
    function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `651b42268fb8baaefb7c30359a32f85c`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showResponse);
  }
 

  if (weatherData.ready) {
    return (
          <div>
            <div className="Search">
              <form className="mb-3" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="change city"
                      autoFocus="on"
                      onChange={updateCity}
                    />
                  </div>
                  <div className="col-3">
                     <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
                  </div>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col">
                <Main city={weatherData.city} temp={weatherData.temp} />
              </div>
              <div className="col">
                <Info
                  status={weatherData.description}
                  humidityVal={weatherData.humidity}
                  windspeedVal={weatherData.wind}
   
                />
              </div>
              <div>Forecast city={weatherData.city}</div>
            </div>
          </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
