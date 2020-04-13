import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Slider from '../../components/slider/slider.component';
import Title from '../../components/title/title.component';
import { trendingNow } from '../../data.utils';
import data from '../../data.json';
import Top5 from '../../components/top5/top5Section.component';
import Category from "../../components/category/category.component";

export default function moviesPage() {
  return (
    <div className='movies__page'>
      <Header />
      <Category li1={"Animé"} li2={"Documentaire"} li3={"Français"} li4={"Internationnal"} li5={"Jeunesse"} li6={"Thriller"}/>
      <div className='movies__container'>
        <h1 className='movies__title'>Films</h1>
        <div className='movies__section'>
          <Title content='Spécial "confinement"' />
          <Slider
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section large__slider'>
          <Title content='Les films originaux Cinéo' />
          <Slider
            large={true}
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section'>
          <Title content='Nouveaux films' />
          <Slider
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section'>
          <Title content='Films animation' />
          <Slider
            data={data.filter((movie) => {
              return movie.type === 'movie';
            })}
          />
        </div>
        <div className='movies__section'>
          <Title content='Films action' />
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
