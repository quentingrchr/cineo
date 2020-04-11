import React from 'react';
import ProgressBar from './progress-bar/progressBar.component';
import Buttons from './buttons/buttons.component';
import { PlayerContextConsumer } from '../player.context';

//let disapearTimeOut;

export default class Controler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  render() {
    //const { isVisible } = this.state;
    return (
      <PlayerContextConsumer>
        {({ videoRef, currentTime, controlerRef }) => (
          <div className='player__controler controler' ref={controlerRef}>
            <ProgressBar
              source={this.props.source}
              video={videoRef}
              controler={controlerRef}
              currentTime={currentTime}
            />
            <Buttons />
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
