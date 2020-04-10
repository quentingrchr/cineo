import React, { createContext, Component, createRef } from 'react';
import video from './video.mp4';

const PlayerContext = createContext({});

export class PlayerContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: video,
      isPlaying: false,
    };
    this.videoRef = createRef();
  }

  play = () => {
    this.videoRef.current.play();
    this.setState({ isPlaying: true });
  };

  pause = () => {
    this.videoRef.current.pause();
    this.setState({ isPlaying: false });
  };

  render() {
    const value = {
      ...this.state,
      videoRef: this.videoRef,
      play: this.play,
      pause: this.pause,
    };

    return (
      <PlayerContext.Provider value={value}>
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

export const PlayerContextConsumer = PlayerContext.Consumer;
