import React from 'react';
import { createRef } from 'react';
import { PlayerContextConsumer } from '../../player.context';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoContainerElt: this.props.videoContainer,
      videoSrc: this.props.source,
      video: this.props.video,
      controlerRef: this.props.controler,
    };
    this.progressBarContainerRef = createRef();
    this.progressBarRef = createRef();
    this.infosRef = createRef();
    this.infosTimeRef = createRef();
    this.infosVideoRef = createRef();
    this.timeIndicationRef = createRef();
  }

  setTime = (time) => {
    let minutes;
    let seconds;
    if (time < 60) {
      seconds = time >= 10 ? time.toString() : `0${time.toString()}`;
      minutes = '00';
    } else if (time >= 60) {
      let calculMinutes = Math.floor(time / 60);
      let calculSeconds = time - 60 * calculMinutes;
      seconds =
        calculSeconds >= 10
          ? calculSeconds.toString()
          : `0${calculSeconds.toString()}`;
      minutes =
        calculMinutes >= 10
          ? calculMinutes.toString()
          : `0${calculMinutes.toString()}`;
    }
    return `${minutes}:${seconds}`;
  };

  progressBarEvolution = () => {
    let video = this.state.video;
    if (video.current) {
      this.progressBarRef.current.value =
        (video.current.currentTime * 100) / video.current.duration;
      this.timeIndicationRef.current.innerHTML = this.setTime(
        Math.floor(video.current.currentTime)
      );
    }
  };

  handelClick = (e, setup, isFullScreen) => {
    let videoContainerLeft = isFullScreen
      ? 0
      : this.state.videoContainerElt.current.offsetLeft;
    let videoElt = this.state.video.current;
    let progressBarWidth = this.progressBarRef.current.offsetWidth;
    let progressBarContainerOffsetLeft = this.progressBarContainerRef.current
      .offsetLeft;
    let mousePosition =
      e.clientX -
      (progressBarContainerOffsetLeft +
        this.state.controlerRef.current.offsetLeft +
        videoContainerLeft);
    this.progressBarRef.current.value =
      (mousePosition * 100) / progressBarWidth;
    videoElt.currentTime =
      (videoElt.duration * this.progressBarRef.current.value) / 100;
    console.log(isFullScreen);
  };

  handelMove = (e, setup, isFullScreen) => {
    let videoContainerLeft = isFullScreen
      ? 0
      : this.state.videoContainerElt.current.offsetLeft;
    let videoElt = this.state.video.current;
    let progressBarWidth = this.progressBarRef.current.offsetWidth;
    let progressBarContainerOffsetLeft = this.progressBarContainerRef.current
      .offsetLeft;
    let mousePosition =
      e.clientX -
      (progressBarContainerOffsetLeft +
        this.state.controlerRef.current.offsetLeft +
        videoContainerLeft);
    let effectiveTimeProgression = Math.floor(
      (videoElt.duration * mousePosition) / progressBarWidth
    );
    this.infosRef.current.style.left = `${mousePosition}px`;
    this.infosTimeRef.current.innerHTML = this.setTime(
      effectiveTimeProgression
    );
    this.infosVideoRef.current.currentTime =
      (this.infosVideoRef.current.duration * mousePosition) / progressBarWidth;
  };

  render() {
    const { videoSrc } = this.state;

    this.progressBarEvolution();

    return (
      <PlayerContextConsumer>
        {({ isVideoFullScreen }) => (
          <div
            className='controler__progress-bar progress-bar'
            ref={this.progressBarContainerRef}
          >
            <div className='progress-bar__infos infos' ref={this.infosRef}>
              <video
                className='infos__video'
                src={videoSrc}
                ref={this.infosVideoRef}
              ></video>
              <div className='infos__time' ref={this.infosTimeRef}></div>
            </div>
            <progress
              className='progress-bar__bar'
              value='0'
              max='100'
              ref={this.progressBarRef}
              onClick={(e) =>
                this.handelClick(e, e.nativeEvent.offsetX, isVideoFullScreen)
              }
              onMouseMove={(e) =>
                this.handelMove(e, e.nativeEvent.offsetX, isVideoFullScreen)
              }
            ></progress>
            <div
              className='progress-bar__time--indication'
              ref={this.timeIndicationRef}
            >
              00:00
            </div>
          </div>
        )}
      </PlayerContextConsumer>
    );
  }
}
