import React, { useState } from "react";
import Parts from "./Parts";
import axios from "axios";
import "./App.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function ShowForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      
      <div className="Forecast row">
        <hr/>
        <Parts data={forecast.list[0]} unit={props.unit} />
        <Parts data={forecast.list[1]} unit={props.unit} />
        <Parts data={forecast.list[2]} unit={props.unit} />
        <Parts data={forecast.list[3]} unit={props.unit} />
        <Parts data={forecast.list[4]} unit={props.unit} />
       
      </div>
    );
  } else {
    let apiKey = "651b42268fb8baaefb7c30359a32f85c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(ShowForecast);
    return null;
  }
}
