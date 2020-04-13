import { Waypoint } from "react-waypoint";
import React, { Component } from "react";

export default class ComingSoon extends Component {
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
        }}
      >
        <div className={`coming-soon ${this.state.visible ? "visible" : ""}`}>
          {this.props.data.map((movie, i) => {
            let countdown = i + 1;
            return (
              <div key={i} className="coming-soon__item">
                <h2>
                  J -<em>{countdown}</em>
                </h2>
                <img src={movie.posterUrl} />
              </div>
            );
          })}
        </div>
      </Waypoint>
    );
  }
}
