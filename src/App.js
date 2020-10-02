import React from "react";
import "./App.css";
import Main from "./Main";
import Info from "./Info";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <Search />
          <div className="row">
            <div className="col">
              <Main city="Tokyo" temp={24} />
            </div>
            <div className="col">
              <Info
                status="Cloudy"
                humidityVal={50}
                windspeedVal={10}
                maxTemp={26}
                minTemp={20}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
