import { Waypoint } from "react-waypoint";

import React, { Component } from "react";

export default class Titles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <Waypoint
        onEnter={() => {
          this.setState({ visible: true });
          console.log("visible");
        }}
      >
        <h1
          className={
            this.state.visible ? "title-component visible" : "title-component"
          }
        >
          {this.props.content}
        </h1>
      </Waypoint>
    );
  }
}
