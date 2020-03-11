import React, { Component } from "react";
import "./App.css";

class WindowInfo extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      screenWidth: 0,
      screenHeight: 0
    };
  }
  componentDidMount() {
    this.updateWindowDimentions();
    window.addEventListener("resize", this.updateWindowDimentions);
  }
  updateWindowDimentions = () => {
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    });
  };
  render() {
    const { screenHeight, screenWidth } = this.state;
    return (
      <>
        <p>screenHeight: {screenHeight}</p>
        <p> screenWidth: {screenWidth}</p>
        stuff and things
      </>
    );
  }
}

export default WindowInfo;
