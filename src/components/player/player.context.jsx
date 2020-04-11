import React, { createContext, Component, createRef } from 'react';

const PlayerContext = createContext({});

export class PlayerContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //src: video,
      isPlaying: false,
      currentTime: 0,
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

  videoCurrentTime = () => {
    this.setState({ currentTime: this.videoRef.current.currentTime });
  };

  render() {
    const value = {
      ...this.state,
      videoRef: this.videoRef,
      play: this.play,
      pause: this.pause,
      videoCurrentTime: this.videoCurrentTime,
    };

    return (
      <PlayerContext.Provider value={value}>
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

export const PlayerContextConsumer = PlayerContext.Consumer;
