import React from 'react';
import ProgressBar from './progress-bar/progressBar.component';
import Buttons from './buttons/buttons.component';
import { PlayerContextConsumer } from '../player.context';
import { createRef } from 'react';

export default class Controler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.controlerRef = createRef();
  }

  render() {
    return (
      <PlayerContextConsumer>
        {({ videoRef, currentTime }) => (
          <div className='player__controler controler' ref={this.controlerRef}>
            <ProgressBar
              source={this.props.source}
              video={videoRef}
              controler={this.controlerRef}
              currentTime={currentTime}
            />
            <Buttons />
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
