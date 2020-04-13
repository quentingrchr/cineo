import React from "react";
import Slider from "../../components/slider/slider.component";
import data from "../../data.json";
import Offers from "../../components/offers/offers.component";

export default function devQuentin() {
  return (
    <div>
      <Slider
        data={data.filter((movie) => {
          return movie.type === "serie";
        })}
      />
      <Slider large={true} data={data.slice(0, 13)} />
      <Offers />
    </div>
  );
}
