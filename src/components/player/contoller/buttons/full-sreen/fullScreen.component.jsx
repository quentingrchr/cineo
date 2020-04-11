import React from 'react';
import { PlayerContextConsumer } from '../../../player.context';

export default class FullScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
    };
  }

  handelClick = (player) => {
    let playerElt = player.current;
    if (this.state.isFullScreen) {
      this.setState({ isFullScreen: false });
      document.exitFullscreen();
    } else {
      this.setState({ isFullScreen: true });
      playerElt.requestFullscreen();
    }
  };

  render() {
    const { isFullScreen } = this.state;
    return (
      <PlayerContextConsumer>
        {({ playerRef }) => (
          <div className='controler__full-screen'>
            <button
              onClick={() => this.handelClick(playerRef)}
              className={`${isFullScreen ? 'is-fullScreen' : ''}`}
            >
              <svg viewBox='0 0 24 24' className='exit-fullscreen'>
                <path d='M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z' />
              </svg>
              <svg viewBox='0 0 24 24' className='go-fullscreen'>
                <path d='M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z' />
              </svg>
            </button>
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
