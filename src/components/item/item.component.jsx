import React from "react";

import { SliderContextConsumer } from "../slider/slider.context";
import { Link } from "react-router-dom";

const Item = ({ title, coverUrl, hoverCoverUrl, genre, duration, imdbID }) => (
  <SliderContextConsumer>
    {({ itemRef }) => (
      <div className="item" ref={itemRef}>
        <Link to={`/player?id=${imdbID}`}>
          <div className="item__gradient-overlay"></div>
          <img className="item__cover" src={coverUrl} alt="" />
          <img className="item__hoverCover" src={hoverCoverUrl} alt="" />
          <div className="item__content">
            <h1>{title}</h1>
            <p>{genre}</p>
            <p>{duration}</p>
          </div>
        </Link>
      </div>
    )}
  </SliderContextConsumer>
);

export default Item;
