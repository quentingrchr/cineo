import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Slider from "../../components/slider/slider.component";
import data from "../../data.json";

export default function seriesPage() {
  return (
    <div className='series__container'>
      <Header />
      <h1 className='series__title'>Séries</h1>
      <div className='series_component'>
        <p>Les plus gros succès Cinéo</p>
        <Slider
        data={data.filter((movie) => {
          return movie.type === "serie";
        })}
      />
      </div>
      <div className='series_component'>
        <p>Les séries originales Cinéo</p>
        <Slider
        data={data.filter((movie) => {
          return movie.type === "serie";
        })}
      />
      </div>
      <div className='series_component'>
        <p>Nouvelles séries</p>
        <Slider
        data={data.filter((movie) => {
          return movie.type === "serie";
        })}
      />
      </div>
      <div className='series_component'>
        <p>Animés</p>
        <Slider
        data={data.filter((movie) => {
          return movie.type === "serie";
        })}
      />
      </div>
      <div className='series_component'>
        <p>Documentaire</p>
        <Slider
        data={data.filter((movie) => {
          return movie.type === "serie";
        })}
      />
      </div>
      <div className='series_component'>
        <p>Top 5 de la semaine</p>
        <Slider
        data={data.filter((movie) => {
          return movie.type === "serie";
        })}
      />
      </div>

      <Footer />
    </div>
  );
}
