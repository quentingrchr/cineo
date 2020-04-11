import React from 'react';
import { PlayerContextProvider, PlayerContextConsumer } from './player.context';
import Video from './video/video.component';
import Controler from './contoller/controler.compnent';
import Exit from './contoller/exit/exit.component';

export default (props) => (
  <PlayerContextProvider>
    <PlayerContextConsumer>
      {({ playerRef, mouseMove }) => (
        <section
          className='player'
          ref={playerRef}
          onMouseMove={() => mouseMove()}
        >
          <Video source={props.source} />
          <Controler source={props.source} />
          <Exit />
        </section>
      )}
    </PlayerContextConsumer>
  </PlayerContextProvider>
);
