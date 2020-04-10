import React from 'react';
import { PlayerContextConsumer } from '../player.context';

export default () => (
  <PlayerContextConsumer>
    {({ play, pause, isPlaying }) => (
      <button
        onClick={() => {
          isPlaying ? pause() : play();
        }}
      >
        {isPlaying ? 'pause' : 'play'}
      </button>
    )}
  </PlayerContextConsumer>
);
