import React from 'react';
import { PlayerContextConsumer } from '../../player.context';
import { createRef } from 'react';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      videoCurrentTime: 0,
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
    if (video.current !== null) {
      this.progressBarRef.current.value =
        (this.props.currentTime * 100) / video.current.duration;
      this.timeIndicationRef.current.innerHTML = this.setTime(
        Math.floor(this.props.currentTime)
      );
    }
  };

  handelClick = (e) => {
    let videoElt = this.state.video.current;
    let progressBarWidth = this.progressBarRef.current.offsetWidth;
    let progressBarContainerOffsetLeft = this.progressBarContainerRef.current
      .offsetLeft;
    let mousePosition =
      e.clientX -
      (progressBarContainerOffsetLeft +
        this.props.controler.current.offsetLeft);
    this.progressBarRef.current.value =
      (mousePosition * 100) / progressBarWidth;
    videoElt.currentTime =
      (videoElt.duration * this.progressBarRef.current.value) / 100;
  };

  handelMove = (e) => {
    let videoElt = this.state.video.current;
    let progressBarWidth = this.progressBarRef.current.offsetWidth;
    let progressBarContainerOffsetLeft = this.progressBarContainerRef.current
      .offsetLeft;
    let mousePosition =
      e.clientX -
      (progressBarContainerOffsetLeft +
        this.props.controler.current.offsetLeft);
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
    this.progressBarEvolution();

    const { video } = this.state;

    return (
      <PlayerContextConsumer>
        {({ videoRef }) => (
          <div
            class='controler__progress-bar progress-bar'
            ref={this.progressBarContainerRef}
          >
            <div class='progress-bar__infos infos' ref={this.infosRef}>
              <video
                class='infos__video'
                src={this.props.source}
                ref={this.infosVideoRef}
              ></video>
              <div class='infos__time' ref={this.infosTimeRef}></div>
            </div>
            <progress
              class='progress-bar__bar'
              value='0'
              max='100'
              ref={this.progressBarRef}
              onClick={(e) => this.handelClick(e, e.nativeEvent.offsetX)}
              onMouseMove={(e) => this.handelMove(e, e.nativeEvent.offsetX)}
            ></progress>
            <div
              class='progress-bar__time--indication'
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
