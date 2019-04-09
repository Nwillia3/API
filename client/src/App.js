import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Snkrs from "./components/Snkrs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> My yute</h1>
        <Snkrs />
      </div>
    );
  }
}

export default App;
