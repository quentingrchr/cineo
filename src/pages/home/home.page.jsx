import React, { Component } from "react";

import data from "../../data.json";
import video from "../../assets/video/casa-de-papel-trailer.mp4";

import {
  lastReleases,
  seriesOnly,
  trendingNow,
  originalsOnly,
} from "../../data.utils";

import Header from "../../components/header/header.component";
import Slider from "../../components/slider/slider.component";
import Title from "../../components/title/title.component";
import CasaBackground from "../../assets/img/casa-bg.png";
import CasaTitle from "../../assets/img/casa.png";

export default class GomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIsVisible: false,
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ videoIsVisible: true });
    }, 8000);
  }

  render() {
    return (
      <div className="home-page">
        <Header />
        <div className="hero-home">
          <div className="hero-gradient"></div>
          <img src={CasaTitle} className="hero-logo" alt="title" />
          <video
            loop
            className={`video ${this.state.videoIsVisible ? "visible" : ""}`}
            type="video/mp4"
            src={video}
            autoPlay
            muted
          ></video>
          <img
            src={CasaBackground}
            className="hero-background"
            alt="background"
          />

          <div className="first-category">
            <Title content="Les nouvelles séries" />
            <Slider data={seriesOnly(data, 15).reverse()} />
          </div>
        </div>
        <section className="home-section">
          <div className="category">
            <Title content="Les nouveaux films" />
            <Slider data={lastReleases(data, "movie")} />
          </div>
          <div className="category">
            <Title content="Tendance actuelles" />
            <Slider data={trendingNow(data)} />
          </div>
          <div className="category">
            <Title
              content={
                <p>
                  Les originaux Ciné<em>o</em>
                </p>
              }
            />
            <Slider large={true} data={originalsOnly(data)} />
          </div>
          <div className="category">
            <Title content="Ils arrivent bientôt..." />
            <Slider large={true} data={originalsOnly(data)} />
          </div>
        </section>
      </div>
    );
  }
}
