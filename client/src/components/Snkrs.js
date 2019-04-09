import React, { Component } from "react";
import axios from "axios";

class Snkrs extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getSnkr();
  }

  getSnkr = async () => {
    const { data } = await axios.get("http://localhost:5000/api/snkrs");
    console.log(data);
  };

  render() {
    // console.log(this.state.data);
    return <h1> World</h1>;
  }
}

export default Snkrs;
