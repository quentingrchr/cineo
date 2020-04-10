import React from 'react';
import { PlayerContextConsumer } from '../../../player.context';

export default () => (
  <PlayerContextConsumer>
    {({ play, pause, isPlaying }) => (
      <button
        className='controler__play play playerButton'
        onClick={() => {
          isPlaying ? pause() : play();
        }}
      >
        {isPlaying ? (
          <div className='play__pause'></div>
        ) : (
          <div className='play__start'></div>
        )}
      </button>
    )}
  </PlayerContextConsumer>
);
