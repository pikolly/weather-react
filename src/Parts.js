import React from "react";
import Icon from "./Icon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  function fahrenheit() {
    let fahrenheit = Math.round((props.data.main.temp * 9) / 5 + 32);
    return `${fahrenheit}°F`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="col">
        <div>{hours()}</div>
        <div>
          <Icon code={props.data.weather[0].icon}/>
        </div>
        <div>{temperature()}</div>
      </div>
    );
  } else {
    return (
      <div className="col">
        <div>{hours()}</div>
        <div>
          <Icon />
        </div>
        <div>{fahrenheit()}</div>
      </div>
    );
  }
}
