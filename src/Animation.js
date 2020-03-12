import React, { Component } from "react";

const colors = [
  "blue",
  "green",
  "orange",
  "pink",
  "lightblue",
  "aliceblue",
  "black",
  "purple",
  "maroon",
  "darkblue"
];
const colorRandom = () => colors[Math.floor(Math.random() * colors.length)];
export default class Animation extends Component {
  state = {
    xPos: 0,
    dx: 4,
    yPos: 0,
    dy: 6,
    ballColor: colorRandom(),
    ballHeight: "20px",
    ballWidth: "20px",
    mouseX: 0,
    mouseY: 0,
    radius: 20
  };
  handleMouseMove = e => {
if (e.nativeEvent.offsetX <= 0 || e.nativeEvent.offsetY <= 0) return
      this.setState({

        mouseX: e.nativeEvent.offsetX,
        mouseY: e.nativeEvent.offsetY
      });
  };
  componentDidMount() {
    this.ticker = setInterval(() => {
      this.tick();
    }, 200);
    console.log('mounted')
    
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.xPos < 0){
    //   //do things
    // }
    if (prevState.xPos > this.props.width - boxWidth) {
      //do things
      this.setState({
        dx: -4,
        xPos: this.props.width - 10 - boxWidth,
        ballColor: colorRandom()
      });
    }
    if (prevState.xPos < 0) {
      //do things
      this.setState({
        dx: +4,
        xPos: 1,
        ballColor: colorRandom()
      });
    }
    if (prevState.yPos > this.props.width - boxWidth) {
      this.setState({
        dy: -6,
        yPos: this.props.height - 10 - boxWidth,
        ballColor: colorRandom()
      });
    }
    if (prevState.yPos < 0) {
      //do things
      this.setState({
        dy: +6,
        yPos: 1,
        ballColor: colorRandom()
      });
    }  }
  bounce = () => {};

  tick() {
    const { xPos, dx, yPos, dy } = this.state;
    this.setState({
      xPos: xPos + dx,
      yPos: yPos + dy
    });
  }
  render() {
    const { width, height, color } = this.props;
    const {
      xPos,
      yPos,
      ballColor,
      ballHeight,
      ballWidth,
      mouseX,
      mouseY
    } = this.state;
    return (
      <div
        style={{ width, height }}
        onMouseMove={this.handleMouseMove}
      >
        <div
          style={{ ...styles.container, backgroundColor: color, width, height }}
        >
          <h1>
            {mouseX} {mouseY}
          </h1>
          <div
            style={{
              ...styles.moveMe,
              left: xPos,
              top: yPos,
              backgroundColor: ballColor,
              height: ballHeight,
              width: ballWidth
            }}
          ></div>
          <div
            style={{
              ...styles.player,
              left: mouseX +20,
              top: mouseY +20,
              backgroundColor: "purple"
            }}
          ></div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    borader: "1px solid",
    backgroundColor: "f3f3f3",
    width: "200",
    height: "200",
    // borderRadius: '200px'
    position: "relative"
  },
  moveMe: {
    position: "absolute",
    borderRadius: "200px"
  },
  player: {
    position: "absolute",
    width: "20px",
    height: "20px"
  }
};
const boxWidth = 20;
