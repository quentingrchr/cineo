import React from 'react';
import { PlayerContextConsumer } from '../player.context';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PlayerContextConsumer>
        {({ videoRef, videoCurrentTime }) => (
          <video
            ref={videoRef}
            src={this.props.source}
            className='player__video'
            onTimeUpdate={() => videoCurrentTime()}
          ></video>
        )}
      </PlayerContextConsumer>
    );
  }
}
