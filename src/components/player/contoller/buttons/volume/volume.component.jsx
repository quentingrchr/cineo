import React from 'react';
import { PlayerContextConsumer } from '../../../player.context';
import { createRef } from 'react';

export default class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMuted: false,
      previousVolume: 1,
    };
    this.volumeControlerRef = createRef();
  }

  muteVolume = (video) => {
    let videoElt = video.current;
    let volumeControlerElt = this.volumeControlerRef.current;
    if (this.state.previousVolume === 0) {
      videoElt.volume = 0.5;
      volumeControlerElt.value = 0.5;
    } else if (videoElt.volume > 0) {
      videoElt.volume = 0;
      volumeControlerElt.value = 0;
    } else {
      videoElt.volume = this.state.previousVolume;
      volumeControlerElt.value = this.state.previousVolume;
    }
    this.state.isMuted
      ? this.setState({ isMuted: false })
      : this.setState({ isMuted: true });
  };

  clickOnVolumeController = (video) => {
    let videoElt = video.current;
    let volumeControlerElt = this.volumeControlerRef.current;
    videoElt.volume = volumeControlerElt.value;
    if (videoElt.volume === 0) {
      this.setState({ isMuted: true });
    } else {
      this.setState({ isMuted: false });
    }
    this.setState({ previousVolume: videoElt.volume });
  };

  render() {
    const { isMuted } = this.state;
    return (
      <PlayerContextConsumer>
        {({ videoRef }) => (
          <div class='controler__volume volume'>
            <button
              class={`volume__mute ${isMuted ? 'is-muted' : ''}`}
              title='mute'
              onClick={() => this.muteVolume(videoRef)}
            >
              <svg viewBox='0 0 25 20'>
                <path
                  xmlns='http://www.w3.org/2000/svg'
                  d='M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z'
                />
              </svg>
            </button>
            <div class='volume__controller'>
              <input
                type='range'
                min='0'
                max='1'
                step='0.01'
                ref={this.volumeControlerRef}
                onClick={() => this.clickOnVolumeController(videoRef)}
                onMouseMove={() => this.clickOnVolumeController(videoRef)}
              />
            </div>
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
