import React from "react";
import data from "../../data.json";
import { comingSoon, moviesOnly, originalsOnly } from "../../data.utils";

import Slider from "../../components/slider/slider.component";
import Title from "../../components/title/title.component";

import ComingSoon from "../../components/coming-soon/coming-soon.component";

export default function devQuentin() {
  return (
    <section className="home-section">
      <div className="category">
        <Title content="Les nouveaux films" />
        <Slider data={moviesOnly(data)} />
      </div>
      <div className="category">
        <Title content="Tendance actuelles" />
        <Slider data={moviesOnly(data)} />
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
        <div className="cta__see__more">
          <div>Voir l'agenda des sorties</div>
          <svg viewBox="0 0 21 16">
            <path d="M0.292893 7.29289C-0.097631 7.68342 -0.0976311 8.31658 0.292893 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65685 0.928931L0.292893 7.29289ZM21 7L1 7L1 9L21 9L21 7Z" />
          </svg>
        </div>
        <ComingSoon data={comingSoon(data)} />
      </div>
    </section>
  );
}
