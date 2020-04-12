import React from 'react';
import { PlayerContextConsumer } from '../player.context';

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
        {({ videoRef, videoCurrentTime }) => (
          <video
            ref={videoRef}
            src={videoSrc}
            className='player__video'
            onTimeUpdate={() => videoCurrentTime()}
            poster='../../../assets/pictures/cinema-1.jpg'
          ></video>
        )}
      </PlayerContextConsumer>
    );
  }
}
