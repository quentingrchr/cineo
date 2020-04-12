import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Slider from '../../components/slider/slider.component';
import Title from '../../components/title/title.component';
import { trendingNow } from '../../data.utils';
import data from '../../data.json';
import Top5 from '../../components/top5/top5Section.component';

export default function moviesPage() {
  return (
    <div className='movies__page'>
      <Header />
      <div className='movies__container'>
        <h1 className='movies__title'>Films</h1>
        <div className='movies__section'>
          <Title content='Les plus gros succès Cinéo' />
          <Slider
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section large__slider'>
          <Title content='Les séries originales Cinéo' />
          <Slider
            large={true}
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section'>
          <Title content='Nouvelles séries' />
          <Slider
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section'>
          <Title content='Animés' />
          <Slider
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section'>
          <Title content='Documentaire' />
          <Slider
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section large__slider'>
          <Title content='Top 5 de la semaine' />
          <Top5 src={trendingNow(data, 20)} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
