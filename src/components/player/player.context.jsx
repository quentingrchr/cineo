import React, { createContext, Component, createRef } from 'react';

const PlayerContext = createContext({});

let disapear;

export class PlayerContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      isPlaying: false,
      currentTime: 0,
      isContolerVisible: false,
    };
    this.videoContainerRef = createRef();
    this.videoRef = createRef();
    this.playerRef = createRef();
    this.controlerRef = createRef();
    this.exitRef = createRef();
  }

  play = () => {
    this.videoRef.current.play();
    this.setState({ isPlaying: true });
  };

  pause = () => {
    this.videoRef.current.pause();
    this.setState({ isPlaying: false });
  };

  mouseMove = () => {
    clearTimeout(disapear);
    this.setState({ isContolerVisible: true });
    disapear = setTimeout(() => {
      this.setState({ isContolerVisible: false });
    }, 6000);
  };

  videoCurrentTime = () => {
    this.setState({ currentTime: this.videoRef.current.currentTime });
  };

  render() {
    const value = {
      ...this.state,
      videoContainerRef: this.videoContainerRef,
      videoRef: this.videoRef,
      playerRef: this.playerRef,
      controlerRef: this.controlerRef,
      exitRef: this.exitRef,
      play: this.play,
      pause: this.pause,
      mouseMove: this.mouseMove,
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
