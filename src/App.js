import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Main from "./Main";
import Info from "./Info";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  const [weather, setWeather] = useState({ ready: false });
    console.log("hello");

  function showResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city:response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.main.wind,
      discription: response.data.weather[0].humidity,
    });
  }
  if (weather.ready) {return (
    <div>
      <div className="App">
        <div className="container">
          <Search />
          <div className="row">
            <div className="col">
              <Main defaultCity="Tokyo" temp={weather.temp} />
            </div>
            <div className="col">
              <Info
                status="Cloudy"
                humidityVal={50}
                windspeedVal={10}
                maxTemp={26}
                minTemp={20}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
else {
  const apiKey = `651b42268fb8baaefb7c30359a32f85c`;
  let unit = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showResponse);
return (<div>Loading...</div>)
}