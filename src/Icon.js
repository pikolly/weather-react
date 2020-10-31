import React from "react";
import "./App.css";

export default function Icon(props){

const iconMapping = {
"01d": "./media/01d.svg",
"01n": "./media/01n.svg",
"02d": "./media/02d.svg",
"02n": "./media/02n.svg",
"03d": "./media/03d.svg",
"03n": "./media/03n.svg",
"04d": "./media/04d.svg",
"04n": "./media/04n.svg",
"09d": "./media/09d.svg",
"09n": "./media/09n.svg",
"10d": "./media/10d.svg",
"10n": "./media/10n.svg",
"11d": "./media/11d.svg",
"11n": "./media/11n.svg",
"13d": "./media/13d.svg",
"13n": "./media/13n.svg",
"50d": "./media/50d.svg",
"50n": "./media/50n.svg",


    };

    return  <img
                className="Icon"
                src={iconMapping[props.icon]}
                alt={props.description}
              />
}