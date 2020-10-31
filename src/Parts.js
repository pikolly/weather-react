import React from "react";
import PartsIcon from "./media/09d.svg";

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

  return (
    <div className="col">
      {hours()}
      <PartsIcon  />
      {temperature()}
    </div>
  );
}
