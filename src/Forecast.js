import React, { useState } from "react";
import Parts from "./Parts";
import axios from "axios";
import "./App.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function SetForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <Parts data={forecast.list[0]} />
        <Parts data={forecast.list[1]} />
        <Parts data={forecast.list[2]} />
        <Parts data={forecast.list[3]} />
        <Parts data={forecast.list[4]} />
        <Parts data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "651b42268fb8baaefb7c30359a32f85c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(SetForecast);

    return null;
  }
}
