import React, { Component } from "react";

import data from "../../data.json";
import video from "../../assets/video/casa-de-papel-trailer.mp4";

import {
  lastReleases,
  seriesOnly,
  trendingNow,
  originalsOnly,
  comingSoon,
} from "../../data.utils";

import ComingSoon from "../../components/coming-soon/coming-soon.component";
import Header from "../../components/header/header.component";
import Slider from "../../components/slider/slider.component";
import Title from "../../components/title/title.component";
import Footer from "../../components/footer/footer.component";
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
    }, 3000);
  }

  render() {
    return (
      <div className="home-page">
        <Header />
        <div className="hero-home">
          <div className="hero-gradient"></div>
          <div className="hero-logo">
            <img src={CasaTitle} alt="title" />
            <div className="btn">Regarder</div>
          </div>

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

          <div className="first-category category">
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
            <div className='cta__see__more'>
              <div>Voir l'agenda des sorties</div>
              <svg viewBox="0 0 21 16">
                <path d="M0.292893 7.29289C-0.097631 7.68342 -0.0976311 8.31658 0.292893 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65685 0.928931L0.292893 7.29289ZM21 7L1 7L1 9L21 9L21 7Z" />
              </svg>
            </div>
            <ComingSoon data={comingSoon(data)} />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
