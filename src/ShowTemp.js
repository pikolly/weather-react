import React from "react";
import "./App.css";

export default function ShowTemp(props) {
  function fUnit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function cUnit(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div>
        <span>{Math.round(props.celsius)}</span>
        <span className="units">
          {" "}
          ºC |{" "}
          <a href="/" onClick={fUnit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={cUnit}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}


