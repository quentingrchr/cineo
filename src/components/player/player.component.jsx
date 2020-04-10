import React from 'react';
import { PlayerContextProvider } from './player.context';
import Video from './video/video.component';
import Play from './contoller/play.component';

export default () => (
  <PlayerContextProvider>
    <Video />
    <Play />
  </PlayerContextProvider>
);
