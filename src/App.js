import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const final_date = new Date(2022, 7, 7);
    const today = new Date();
    const days = Date.daysBetween(final_date, today);
    return (
      <div className="App">
        <header className="App-header">
          <p>Quedan</p>
          <h1>{days}</h1>
          <p>días del gobierno de Iván Duque.</p>
        </header>
      </div>
    );
  }
}

Date.daysBetween = function(date1, date2) {
  var one_day = 1000 * 60 * 60 * 24; //Dia en milisegundos
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  var difference_ms = date1_ms - date2_ms;
  return Math.round(difference_ms / one_day);
};

export default App;
