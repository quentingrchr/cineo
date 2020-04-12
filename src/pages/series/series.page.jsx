import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Slider from "../../components/slider/slider.component";
import Title from '../../components/title/title.component';
import data from "../../data.json";
import Top5 from '../../components/top5/top5Section.component';

export default function seriesPage() {
  return (
    <div className='series__page'>
      <Header />
      <div className='series__container'>
        <h1 className='series__title'>Séries</h1>
        <div className='series__section'>
          <Title content='Les plus gros succès Cinéo'/>
          <Slider
          data={data.filter((movie) => {
            return movie.type === "serie";
          })}
        />
        </div>
        <div className='series__section large__slider'>
          <Title content='Les séries originales Cinéo'/>
          <Slider large = {true}
          data={data.filter((movie) => {
            return movie.type === "serie";
          })}
        />
        </div>
        <div className='series__section'>
          <Title content='Nouvelles séries'/>
          <Slider
          data={data.filter((movie) => {
            return movie.type === "serie";
          })}
        />
        </div>
        <div className='series__section'>
          <Title content='Animés'/>
          <Slider
          data={data.filter((movie) => {
            return movie.type === "serie";
          })}
        />
        </div>
        <div className='series__section'>
          <Title content='Documentaire' />
          <Slider
          data={data.filter((movie) => {
            return movie.type === "serie";
          })}
        />
        </div>
        <div className='series__section large__slider'>
          <Title content='Top 5 de la semaine'/>
          <Top5 />
        </div>
      </div>
      <Footer />
    </div>
  );
}
