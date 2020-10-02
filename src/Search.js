import React, { useState } from "react";
import "./App.css";

export default function Search() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="change city"
              autoFocus="on"
              onChange={updateCity}
            />
            <input type="submit" className="d-none" />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-primary w-100">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
