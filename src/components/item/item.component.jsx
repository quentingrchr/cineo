import React from "react";

import { SliderContextConsumer } from "../slider/slider.context";
import { Link } from "react-router-dom";

import ProgressiveImage from "react-progressive-image";

const Item = ({
  title,
  coverUrl,
  hoverCoverUrl,
  genre,
  type,
  duration,
  imdbID,
  seasons,
  large,
  posterUrl,
}) => (
  <SliderContextConsumer>
    {({ itemRef }) => (
      <div className="item" ref={itemRef}>
        <Link to={`/player?id=${imdbID}`}>
          {!large && <div className="item__gradient-overlay"></div>}

          <div className="item__cover">
            <ProgressiveImage
              src={large ? posterUrl : coverUrl}
              placeholder="tiny-image.jpg"
            >
              {(src) => <img src={src} alt="an image" />}
            </ProgressiveImage>
          </div>

          {!large && (
            <div className="item__hoverCover">
              <ProgressiveImage
                src={hoverCoverUrl}
                placeholder="tiny-image.jpg"
              >
                {(src) => <img src={src} alt="an image" />}
              </ProgressiveImage>
            </div>
          )}
          {!large && (
            <div className="item__content">
              <h1>{title}</h1>
              <p className="genre">{genre}</p>
              <p>{seasons ? `${seasons} saisons` : duration}</p>
            </div>
          )}
        </Link>
      </div>
    )}
  </SliderContextConsumer>
);

export default Item;
