import React from 'react';
import { PlayerContextConsumer } from '../player.context';

export default () => (
  <PlayerContextConsumer>
    {({ src, videoRef }) => (
      <video ref={videoRef} src={src} className='player__video'></video>
    )}
  </PlayerContextConsumer>
);
