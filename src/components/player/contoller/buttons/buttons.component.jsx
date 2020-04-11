import React from 'react';
import Play from './play-pause/play.component';
import Volume from './volume/volume.component';
import Scroll from './scroll/scroll.component';
import FullScreen from './full-sreen/fullScreen.component';

export default () => (
  <div className='controler__buttons'>
    <div className='controler__play-volume'>
      <Play />
      <Scroll />
      <Volume />
    </div>
    <FullScreen />
  </div>
);
