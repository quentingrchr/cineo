import React, { Component, createRef } from "react";
import { Waypoint } from "react-waypoint";

import Item from "../item/item.component";

import { ReactComponent as PrevArrow } from "../../assets/svg/prev-arrow.svg";
import { ReactComponent as NextArrow } from "../../assets/svg/next-arrow.svg";

import { SliderContextConsumer, SliderContextProvider } from "./slider.context";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      offset: 0,
      nbViewports: Math.ceil(this.props.data.length / 5),
      nbItems: this.props.data.length,
      visible: false,
    };
    this.sliderRef = createRef();
  }

  handlePrev = (element) => {
    if (this.state.position <= 0) return;
    let itemWidth = element.current.offsetWidth;
    this.setState((prevState) => {
      return { ...prevState, position: prevState.position-- };
    });
    this.setState((prevState) => {
      return {
        ...prevState,
        offset:
          prevState.position * 5 >= 5
            ? prevState.offset - (itemWidth + 2) * 5
            : 0,
      };
    });
  };

  handleNext = (element) => {
    if (this.state.position >= this.state.nbViewports) return;
    this.setState((prevState) => {
      return {
        ...prevState,
        position: prevState.position++,
      };
    });
    let itemWidth = element.current.offsetWidth;
    this.setState({
      ...this.state,
      offset:
        this.state.offset +
        (itemWidth + 2) *
          (this.state.nbItems - this.state.position * 5 >= 5
            ? 5
            : this.state.nbItems - this.state.position * 5),
    });
  };

  render() {
    return (
      <SliderContextProvider>
        <SliderContextConsumer>
          {({ itemRef }) => (
            <Waypoint
              onEnter={() => {
                this.setState({ ...this.state, visible: true });
              }}
            >
              <div
                className={`slider-container ${
                  this.props.large ? "slider-large-container" : ""
                } ${this.state.visible ? "visible" : ""}`}
              >
                <div className="slider-wrapper">
                  <div
                    ref={this.sliderRef}
                    className="slider"
                    style={{
                      transform: `translateX(-${this.state.offset}px)`,
                    }}
                  >
                    {this.props.data.map((el) => {
                      return (
                        <Item
                          large={this.props.large}
                          title={el.title}
                          key={el.imdbID}
                          imdbID={el.imdbID}
                          coverUrl={el.coverUrl}
                          hoverCoverUrl={el.hoverCoverUrl}
                          genre={el.genre}
                          type={el.type}
                          seasons={el.seasons}
                          duration={el.duration}
                          posterUrl={el.posterUrl}
                          tagline={el.tagline}
                        />
                      );
                    })}
                  </div>
                </div>

                {this.state.position + 1 !== this.state.nbViewports && (
                  <div
                    onClick={() => {
                      this.handleNext(itemRef);
                    }}
                    className="arrow-wrapper arrow-wrapper-next"
                  >
                    <NextArrow className="arrow next-arrow" />
                  </div>
                )}

                {this.state.position !== 0 && (
                  <div
                    onClick={() => {
                      this.handlePrev(itemRef);
                    }}
                    className="arrow-wrapper arrow-wrapper-prev"
                  >
                    <PrevArrow className="arrow prev-arrow" />
                  </div>
                )}
              </div>
            </Waypoint>
          )}
        </SliderContextConsumer>
      </SliderContextProvider>
    );
  }
}
