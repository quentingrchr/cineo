import React from 'react';
import { PlayerContextProvider } from './player.context';
import Video from './video/video.component';
import Controler from './contoller/controler.compnent';

export default () => (
  <PlayerContextProvider>
    <section className='player'>
      <Video />
      <Controler />
    </section>
  </PlayerContextProvider>
);
