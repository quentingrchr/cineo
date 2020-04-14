import React, { Component } from "react";

export function Button(props) {
  return (
    <button className="button-component" onClick={() => props.clickFunction()}>
      {props.content}
    </button>
  );
}

export default class genreSelection extends Component {
  render() {
    return <div></div>;
  }
}
