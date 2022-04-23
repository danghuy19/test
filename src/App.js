import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBanner from "./components/TopBanner";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Lastest from "./components/Lastest";
import Poster from "./components/Poster";
import Xbox from "./components/Xbox";
import Footer from "./components/Footer";
import Copywrite from "./components/Copywrite";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flag: 0, position_x: 10, position_y: 10 };
  }

  onHold = () => {
    this.setState({
      flag: 1,
      position_x: this.state.position_x,
      position_x: this.state.position_x,
    });
  };

  onDrag = (e) => {
    if (this.state.flag) {
      console.log("Keo");
      // let vi_tri_chua = e.target.offsetLeft;

      let maximumPosX = 800;
      let maximumPosY = 800;

      let position_cursor_x = e.clientX - 550;
      let position_cursor_y = e.clientY - 100;

      if (
        position_cursor_x >= maximumPosX &&
        position_cursor_y >= maximumPosY
      ) {
        this.setState({ flag: 1, position_x: maximumPosX, position_y: maximumPosY });
      }

      if (position_cursor_x >= maximumPosX) {
        this.setState({ flag: 1, position_x: maximumPosX, position_y: position_cursor_y });
      } else if (position_cursor_y >= maximumPosY) {
        this.setState({ flag: 1, position_x: position_cursor_x, position_y: maximumPosY });
      } else {
        this.setState({
          flag: 1,
          position_x: position_cursor_x,
          position_y: position_cursor_y,
        });
      }

      // if (position_cursor_x <= 0) {
      //   this.setState({ flag: 1, position_x: 0, position_y: position_cursor_y });
      // } else if (position_cursor_y <= 0) {
      //   this.setState({ flag: 1, position_x: position_cursor_x, position_y: 0 });
      // } else {
      //   this.setState({
      //     flag: 1,
      //     position_x: position_cursor_x,
      //     position_y: position_cursor_y,
      //   });
      // }
    }
  };

  onDrop = () => {
    this.setState({
      flag: 0,
      position_x: this.state.position_x,
      position_x: this.state.position_x,
    });
  };

  render() {
    return (
      <div className="App">
        {/* <TopBanner />
      <Slider />
      <Content />
      <Lastest />
      <Poster />
      <Xbox />
      <Footer />
      <Copywrite /> */}
        <div className="object1" onMouseMove={this.onDrag}>
          <div
            className="object2"
            onMouseDown={this.onHold}
            onMouseUp={this.onDrop}
            style={{
              top: this.state.position_y + "px",
              left: this.state.position_x + "px",
            }}
          ></div>
        </div>
      </div>
    );
  }
}
