import React, { Component } from "react";
import { Link } from "react-router-dom";
import Main from "./main.js";
import Header from "./header.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
