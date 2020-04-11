import React from "react";

import { SliderContextConsumer } from "../slider/slider.context";

const Item = ({ title, coverUrl, hoverCoverUrl, genre, duration, imdbID }) => (
  <SliderContextConsumer>
    {({ itemRef }) => (
      <div className="item" key={imdbID} ref={itemRef}>
        <div className="item__gradient-overlay"></div>
        <img className="item__cover" src={coverUrl} alt="" />
        <img className="item__hoverCover" src={hoverCoverUrl} alt="" />
        <div className="item__content">
          <h1>{title}</h1>
          <p>{genre}</p>
          <p>{duration}</p>
        </div>
      </div>
    )}
  </SliderContextConsumer>
);

export default Item;
