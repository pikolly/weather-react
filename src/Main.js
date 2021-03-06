import React from "react";
import ShowTemp from "./ShowTemp";
import "./App.css";
import Icon from "./Icon";

export default function Main(props) {
  return (
    <div>
      <h3 className="font-weight-normal text-capitalize">{props.city}</h3>
      <div className="Main">
        <h1 className="display-1 font-weight-normal">
          <ShowTemp
            celsius={props.temp}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </h1>
        <div className="icon">
          <Icon icon={props.icon} />
        </div>{" "}
      </div>
    </div>
  );
}
