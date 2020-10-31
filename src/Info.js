import React from "react";
import "./App.css";

export default function Info({
  status,
  humidityVal,
  windspeedVal,
}) {
  return (
    <div className="Info">
      <h4 className="font-weight-normal">{status}</h4>
      <div>
        <span>Humidity: {humidityVal}%</span>
      </div>
      <div>
        <span>Wind Speed: {windspeedVal}km/h</span>
      </div>
    </div>
  );
}
