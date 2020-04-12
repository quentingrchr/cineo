import React from 'react';
import ProgressBar from './progress-bar/progressBar.component';
import Buttons from './buttons/buttons.component';
import { PlayerContextConsumer } from '../player.context';

//let disapearTimeOut;

export default class Controler extends React.Component {
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
        {({ videoRef, currentTime, controlerRef, isContolerVisible }) => (
          <div
            className={`player__controler controler ${
              isContolerVisible ? '' : 'is-invisible'
            }`}
            ref={controlerRef}
          >
            <ProgressBar
              source={videoSrc}
              video={videoRef}
              controler={controlerRef}
            />
            <Buttons />
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
