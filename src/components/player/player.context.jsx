import React, { createContext, Component, createRef } from 'react';

const PlayerContext = createContext({});

let disapear;

export class PlayerContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //src: video,
      isPlaying: false,
      currentTime: 0,
    };
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
    this.exitRef.current.classList.remove('is-invisible');
    this.controlerRef.current.classList.remove('is-invisible');
    disapear = setTimeout(() => {
      this.exitRef.current.classList.add('is-invisible');
      this.controlerRef.current.classList.add('is-invisible');
    }, 6000);
  };

  videoCurrentTime = () => {
    this.setState({ currentTime: this.videoRef.current.currentTime });
  };

  render() {
    const value = {
      ...this.state,
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
