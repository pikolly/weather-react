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
function fUnit() {
    return (props.celsius * 9) / 5 + 32;
  }

if (unit === "celsius") {
  return (
      <div className="Main">
        <h1 className="display-1 font-weight-normal">{Math.round(props.celsius)}</h1>
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
      <div className="Main">
      <h1 className="display-1 font-weight-normal">{Math.round(fUnit())}</h1>
        <span className="unit">
          <a href="/" onClick={cUnit}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}