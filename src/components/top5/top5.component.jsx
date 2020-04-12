import React from "react";
import { Waypoint } from "react-waypoint";

export default class Number extends React.Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = { visible: false };
  }
  render() {
    return (
      <Waypoint
        onEnter={() => {
          this.setState({
            ...this.state,
            visible: true,
          });
        }}
        onLeave={this._handleWaypointLeave}
      >
        <div>
          <div
            className={
              this.state.visible ? "topFive__number appear" : "topFive__number"
            }
          >
            {this.props.children}
          </div>
          {/* <img src={props.src}></img> */}
        </div>
      </Waypoint>
    );
  }
}
