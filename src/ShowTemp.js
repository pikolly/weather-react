import React, { useState } from "react";
import "./App.css";

export default function ShowTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function fUnit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function cUnit(event) {
    event.preventDefault();
    setUnit("celsius");
  }
function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

if (unit === "celsius") {
  return (
      <div >
        <span>{Math.round(props.celsius)}</span>
        <span className="units">
         {" "}
            ºC
          |{" "}
          <a href="/" onClick={fUnit}>
            ºF
          </a>
        </span>
      </div>
  );
}
 else {
    return (
      <div >
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

//      <h1 className="display-1 font-weight-normal">{Math.round(fahrenheit())}</h1>
