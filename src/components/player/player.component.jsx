import React from 'react';
import { PlayerContextConsumer } from './player.context';
import Video from './video/video.component';
import Controler from './contoller/controler.compnent';

export default class Player extends React.Component {
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
        {({ playerRef, mouseMove }) => (
          <section
            className='player'
            ref={playerRef}
            onMouseMove={() => mouseMove()}
          >
            <Video source={videoSrc} />
            <Controler source={videoSrc} />
          </section>
        )}
      </PlayerContextConsumer>
    );
  }
}
