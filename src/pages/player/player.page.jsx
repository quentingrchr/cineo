import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Player from '../../components/player/player.component';
import Header from '../../components/header/header.component';
import Button from '../../components/button/button.component';
import Video from '../../assets/video/the-eagles-hotel-california-solo-cover-by-chloe.mp4';

import data from '../../data.json';

export default class playerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.search.substr(4),
    };
  }
  render() {
    return (
      <div className='player-page'>
        <Header />
        <div className='player-page__content'>
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
                {data.filter((el) => el.imdbID === this.state.id)[0].title}
              </h1>
              <p className='description__infos'>
                {`${data.filter((el) => el.imdbID === this.state.id)[0].year} -
              ${data.filter((el) => el.imdbID === this.state.id)[0].genre} -
              ${data.filter((el) => el.imdbID === this.state.id)[0].duration}`}
              </p>
              <Button
                content={<div className='button-content'>Regarder</div>}
              />
              <p className='description__synopsis'>
                <span>Synopsis</span>
                {data.filter((el) => el.imdbID === this.state.id)[0].pitch}
              </p>
              <p className='description__actors'>
                <span>Acteurs</span>
                {data.filter((el) => el.imdbID === this.state.id)[0].stars}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
