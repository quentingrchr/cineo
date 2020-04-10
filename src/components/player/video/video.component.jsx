import React from 'react';
import { PlayerContextConsumer } from '../player.context';

export default () => (
  <PlayerContextConsumer>
    {({ src, videoRef }) => (
      <video ref={videoRef}>
        <source src={src}></source>
      </video>
    )}
  </PlayerContextConsumer>
);
