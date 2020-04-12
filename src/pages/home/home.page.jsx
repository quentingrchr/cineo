import React from "react";

import data from "../../data.json";

import Header from "../../components/header/header.component";
import Slider from "../../components/slider/slider.component";
import Title from "../../components/title/title.component";
import CasaBackground from "../../assets/img/casa-bg.png";
import CasaTitle from "../../assets/img/casa.png";

export default function homePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="hero-home">
        <div className="hero-gradient"></div>
        <img src={CasaTitle} className="hero-logo" alt="title" />
        <img
          src={CasaBackground}
          className="hero-background"
          alt="background"
        />

        <div className="first-slider">
          <Title content="Les nouvelles séries" />
          <Slider
            data={data.filter((movie) => {
              return movie.type === "movie";
            })}
          />
        </div>
      </div>
    </div>
  );
}
