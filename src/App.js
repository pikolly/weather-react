import React from "react";
import "./App.css";
import Weather from "./Weather";

import Footer from "./Footer";

export default function App() {
 return (
   <div className="container">
   <div className = "App">
     <Weather defaultCity="Tokyo" />
   </div>
   <div><Footer /></div>
   </div>
   
 )
}
