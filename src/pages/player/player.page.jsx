import React, { Component } from "react";
import { Link } from "react-router-dom";

import { moviesOnly, seriesOnly } from "../../data.utils";

import Player from "../../components/player/player.component";
import Header from "../../components/header/header.component";
import Button from "../../components/button/button.component";
import Title from "../../components/title/title.component";
import Slider from "../../components/slider/slider.component";
import Footer from "../../components/footer/footer.component";
import Video from "../../assets/video/sharknado-6-shark-vs-t-rex-trailer-new-2018-the-last-sharknado-movie-hd.mp4";

import data from "../../data.json";
import {
  PlayerContextProvider,
  PlayerContextConsumer,
} from "../../components/player/player.context";
import { createRef } from "react";

export default class playerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.location.search.substr(4)),
      isMovie: true,
      isSeasonsListVisible: false,
    };
    this.seasonButtonRef = createRef();
  }

  componentWillMount = () => {
    if (data.filter((el) => el.imdbID === this.state.id)[0].type === "movie") {
      this.setState({ isMovie: true });
    } else {
      this.setState({ isMovie: false });
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location !== prevProps.location) {
      this.setState({ id: parseInt(this.props.location.search.substr(4)) });
    }
  }

  handelClick = () => {
    this.state.isSeasonsListVisible
      ? this.setState({ isSeasonsListVisible: false })
      : this.setState({ isSeasonsListVisible: true });
  };

  seasonsItemClick = (e) => {
    this.seasonButtonRef.current.innerHTML = e.target.innerHTML;
    this.setState({ isSeasonsListVisible: false });
  };

  globalClick = () => {
    if (this.state.isSeasonsListVisible) {
      this.setState({ isSeasonsListVisible: false });
    }
  };

  render() {
    const { id, isMovie, isSeasonsListVisible } = this.state;

    return (
      <PlayerContextProvider>
        <PlayerContextConsumer>
          {({ videoContainerRef, play }) => (
            <div className="player-page" onClick={() => this.globalClick()}>
              <Header />
              <div className="player-page__content">
                <Link to="">
                  <div className="player-page__back-to-home">
                    <svg viewBox="0 0 21 16">
                      <path d="M0.292893 7.29289C-0.097631 7.68342 -0.0976311 8.31658 0.292893 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65685 0.928931L0.292893 7.29289ZM21 7L1 7L1 9L21 9L21 7Z" />
                    </svg>
                    <p>Retour à l'acceuil</p>
                  </div>
                </Link>
                <div className="player-page__video-description">
                  <div className="player-page__video" ref={videoContainerRef}>
                    <Player source={Video} />
                  </div>
                  <div className="player-page__description description">
                    <div class="description__title">
                      <h1>{data.filter((el) => el.imdbID === id)[0].title}</h1>
                      <p>
                        {`${data.filter((el) => el.imdbID === id)[0].year} -
                          ${data.filter((el) => el.imdbID === id)[0].genre} -
                          ${data.filter((el) => el.imdbID === id)[0].duration}`}
                      </p>
                    </div>
                    <div className="descriptions__buttons button">
                      <Button
                        content={
                          <div className="button__play-content">Regarder</div>
                        }
                        clickFunction={() => play()}
                      />
                      {!isMovie && (
                        <Button
                          content={
                            <div
                              className={`button__season-content ${
                                isSeasonsListVisible ? "is-clicked" : ""
                              }`}
                              ref={this.seasonButtonRef}
                            >
                              Saison 1
                            </div>
                          }
                          clickFunction={() => this.handelClick()}
                        />
                      )}
                      {!isMovie && isSeasonsListVisible && (
                        <ul className="seasons-list">
                          <li onClick={(e) => this.seasonsItemClick(e)}>
                            Saison 1
                          </li>
                          <li onClick={(e) => this.seasonsItemClick(e)}>
                            Saison 2
                          </li>
                          <li onClick={(e) => this.seasonsItemClick(e)}>
                            Saison 3
                          </li>
                          <li onClick={(e) => this.seasonsItemClick(e)}>
                            Saison 4
                          </li>
                          <li onClick={(e) => this.seasonsItemClick(e)}>
                            Saison 5
                          </li>
                          <li onClick={(e) => this.seasonsItemClick(e)}>
                            Saison 6
                          </li>
                        </ul>
                      )}
                      <div className="button__download">
                        <svg
                          width="352"
                          height="448"
                          viewBox="0 0 352 448"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 144H296C306.609 144 316.783 148.214 324.284 155.716C331.786 163.217 336 173.391 336 184V392C336 402.609 331.786 412.783 324.284 420.284C316.783 427.786 306.609 432 296 432H56C45.3913 432 35.2172 427.786 27.7157 420.284C20.2143 412.783 16 402.609 16 392V184C16 173.391 20.2143 163.217 27.7157 155.716C35.2172 148.214 45.3913 144 56 144H96"
                            stroke="black"
                            stroke-width="32"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M96 240L176 320L256 240"
                            stroke="black"
                            stroke-width="32"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M176 16V304"
                            stroke="black"
                            stroke-width="32"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="description__synopsis">
                      <span>Synopsis</span>
                      {data.filter((el) => el.imdbID === id)[0].pitch}
                    </p>
                    <p className="description__actors">
                      <span>Acteurs</span>
                      {data.filter((el) => el.imdbID === id)[0].stars}
                    </p>
                  </div>
                </div>
              </div>
              {!isMovie && (
                <div className="player-page__series-episodes">
                  <div>Episode 1</div>
                  <div>Episode 2</div>
                  <div>Episode 3</div>
                  <div>Episode 4</div>
                  <div>Episode 5</div>
                  <div>Episode 6</div>
                  <div>Episode 7</div>
                </div>
              )}
              <div className="player-page__slider">
                <Title
                  content={`Les ${isMovie ? "films" : "série"} similaires`}
                />
                <Slider
                  data={
                    data.filter((el) => el.imdbID === this.state.id)[0].type ===
                    "movie"
                      ? moviesOnly(data, 15)
                      : seriesOnly(data, 15)
                  }
                />
              </div>
              <Footer />
            </div>
          )}
        </PlayerContextConsumer>
      </PlayerContextProvider>
    );
  }
}
