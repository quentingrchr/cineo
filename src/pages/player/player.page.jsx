import React, { Component } from 'react';

import Player from '../../components/player/player.component';
import Video from '../../assets/video/the-eagles-hotel-california-solo-cover-by-chloe.mp4';

import data from '../../data.json';

export default class playerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.search.substr(4),
    };
  }
  render() {
    return (
      <div>
        {/* <h1>{data.filter((el) => el.imdbID === this.state.id)[0].title}</h1>
        <p>{data.filter((el) => el.imdbID === this.state.id)[0].pitch}</p> */}
        <Player source={Video} />
      </div>
    );
  }
}
