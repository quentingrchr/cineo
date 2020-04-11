import React from 'react';
import { PlayerContextProvider } from './player.context';
import Video from './video/video.component';
import Controler from './contoller/controler.compnent';

export default (props) => (
  <PlayerContextProvider>
    <section className='player'>
      <Video source={props.source} />
      <Controler source={props.source} />
    </section>
  </PlayerContextProvider>
);
