import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Player from '../../components/player/player.component';
import Header from '../../components/header/header.component';
import Button from '../../components/button/button.component';
import Title from '../../components/title/title.component';
import Slider from '../../components/slider/slider.component';
import Video from '../../assets/video/the-eagles-hotel-california-solo-cover-by-chloe.mp4';

import data from '../../data.json';
import {
  PlayerContextProvider,
  PlayerContextConsumer,
} from '../../components/player/player.context';

export default class playerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      id: parseInt(this.props.location.search.substr(4)),
      isMovie: true,
      isSeasonsListVisible: false,
    };
  }

  componentWillMount = () => {
    if (data.filter((el) => el.imdbID === this.state.id)[0].type === 'movie') {
      this.setState({ isMovie: true });
    } else {
      this.setState({ isMovie: false });
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location !== prevProps.location) {
      this.setState({ id: this.props.location.search.substr(4) });
    }
  }

  handelClick = () => {
    this.state.isSeasonsListVisible
      ? this.setState({ isSeasonsListVisible: false })
      : this.setState({ isSeasonsListVisible: true });
  };


  render() {
    const { id, isMovie, isSeasonsListVisible } = this.state;
    console.log(isMovie);
    console.log(data.filter((el) => el.imdbID === this.state.id)[0].type);

    return (
      <PlayerContextProvider>
        <PlayerContextConsumer>
          {({ videoContainerRef, play }) => (
            <div className='player-page'>
              <Header />
              <div className='player-page__content' ref={videoContainerRef}>
                <Link to='/home'>
                  <div className='player-page__back-to-home'>
                    <svg viewBox='0 0 21 16'>
                      <path d='M0.292893 7.29289C-0.097631 7.68342 -0.0976311 8.31658 0.292893 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65685 0.928931L0.292893 7.29289ZM21 7L1 7L1 9L21 9L21 7Z' />
                    </svg>
                    <p>Retour à l'acceuil</p>
                  </div>
                </Link>
                <div className='player-page__video-description'>
                  <div className='player-page__video'>
                    <Player source={Video} />
                  </div>
                  <div className='player-page__description description'>
                    <h1 className='description__title'>
                      {data.filter((el) => el.imdbID === id)[0].title}
                    </h1>
                    <p className='description__infos'>
                      {`${data.filter((el) => el.imdbID === id)[0].year} -
              ${data.filter((el) => el.imdbID === id)[0].genre} -
              ${data.filter((el) => el.imdbID === id)[0].duration}`}
                    </p>
                    <div className='descriptions__buttons button'>
                      <Button
                        content={
                          <div className='button__play-content'>Regarder</div>
                        }
                        clickFunction={() => play()}
                      />
                      {!isMovie && (
                        <Button
                          content={
                            <div className='button__season-content'>
                              Saison 1
                            </div>
                          }
                          clickFunction={() => this.handelClick()}
                        />
                      )}
                      {!isMovie && isSeasonsListVisible && (
                        <ul className='seasons-list'>
                          <li>Saison 1</li>
                          <li>Saison 2</li>
                          <li>Saison 3</li>
                          <li>Saison 4</li>
                          <li>Saison 5</li>
                          <li>Saison 6</li>
                        </ul>
                      )}
                    </div>
                    <p className='description__synopsis'>
                      <span>Synopsis</span>
                      {data.filter((el) => el.imdbID === id)[0].pitch}
                    </p>
                    <p className='description__actors'>
                      <span>Acteurs</span>
                      {data.filter((el) => el.imdbID === id)[0].stars}
                    </p>
                  </div>
                </div>
              </div>
              {!isMovie && (
                <div className='player-page__series-episodes'>
                  <Button content='Episode 1' />
                  <Button content='Episode 2' />
                  <Button content='Episode 3' />
                  <Button content='Episode 4' />
                  <Button content='Episode 5' />
                  <Button content='Episode 6' />
                  <Button content='Episode 7' />
                </div>
              )}
              <div className='player-page__slider'>
                <Title
                  content={`Les ${isMovie ? 'films' : 'série'} similaires`}
                />
                <Slider
                  data={data.filter((movie) => {
                    return movie.type === 'serie';
                  })}
                />
              </div>
            </div>
          )}
        </PlayerContextConsumer>
      </PlayerContextProvider>
    );
  }
}
