import React, { Component } from 'react';


class MouseInfo extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      x: 0,
      y: 0
    };
  }



  render() {
    const { x, y } = this.state;
    return (
      <>
        <h1>
          {x} {y}
        </h1>
      </>
    );
  }
}

export default MouseInfo