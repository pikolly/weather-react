import React from "react";
import "./App.css";

export default function Info({
  status,
  humidityVal,
  windspeedVal,
  maxTemp,
  minTemp,
}) {
  return (
    <div className="Info">
      <h3 className="font-weight-normal">{status}</h3>
      <div>
        <span>Humidity: {humidityVal}%</span>
      </div>
      <div>
        <span>Wind Speed: {windspeedVal}km/h</span>
      </div>
      <div>
        <span>{maxTemp}º🠡</span>
        <span className="space"></span>
        <span>{minTemp}º🠣</span>
      </div>
    </div>
  );
}
