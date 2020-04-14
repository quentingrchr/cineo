import React from 'react';
import { PlayerContextConsumer } from '../player.context';
import picture from './../../../assets/pictures/cinema-1.jpg';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: this.props.source,
    };
  }

  render() {
    const { videoSrc } = this.state;

    return (
      <PlayerContextConsumer>
        {({ videoRef, videoCurrentTime, videoIsStarted }) => (
          <video
            ref={videoRef}
            src={videoSrc}
            className='player__video'
            onTimeUpdate={() => videoCurrentTime()}
            poster={picture}
          ></video>
        )}
      </PlayerContextConsumer>
    );
  }
}
