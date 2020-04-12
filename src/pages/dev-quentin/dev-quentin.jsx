import React from "react";
import Slider from "../../components/slider/slider.component";
import data from "../../data.json";
export default function devQuentin() {
  return (
    <div>
      <Slider
        data={data.filter((movie) => {
          return movie.type === "serie";
        })}
      />
      <Slider large={true} data={data.slice(0, 13)} />
    </div>
  );
}
