import React from 'react';
import { PlayerContextConsumer } from '../../player.context';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PlayerContextConsumer>
        {({ src }) => (
          <div class='controler__progress-bar progress-bar'>
            <div class='progress-bar__infos infos'>
              <video class='infos__video' src='assets/video.mp4'></video>
              <div class='infos__time'></div>
            </div>
            <progress class='progress-bar__bar' value='0' max='100'></progress>
            <div class='progress-bar__time--indication'>00:00</div>
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
