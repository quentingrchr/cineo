import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Slider from "../../components/slider/slider.component";
import data from "../../data.json";

export default function moviesPage() {
  return (
    <div>
      <Header />
      <h1>Films</h1>
      <div>
        <p></p>
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
