import React, { useState } from "react";
import "./App.css";
import Icon from "./media/09d.svg";

export default function Main(props) {
  let [temp, setTemp] = useState(props.temp);
  function fUnit(event) {
    event.preventDefault();
    setTemp(Math.round((props.temp * 9) / 5 + 32));
  }
  function cUnit(event) {
    event.preventDefault();
    setTemp(props.temp);
  }
  return (
    <div>
      <h3 className="font-weight-normal">{props.city}</h3>
      <div className="Main">
        <h1 className="display-1 font-weight-normal">{temp}</h1>
        <div className="units">
          <a href="/" onClick={cUnit}>
            ºC
          </a>{" "}
          |{" "}
          <a href="/" onClick={fUnit}>
            ºF
          </a>
        </div>
        <div className="icon">
          <img src={Icon} alt="" />
        </div>{" "}
      </div>
    </div>
  );
}
