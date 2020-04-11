import React, { Component, createRef } from "react";

import Item from "../item/item.component";

import { SliderContextConsumer, SliderContextProvider } from "./slider.context";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      offset: 0,
      nbViewports: Math.floor(this.props.data.length / 5),
    };
    this.sliderRef = createRef();
  }

  handlePrev = (element) => {
    if (this.state.position <= 0) return;
    let itemWidth = element.current.offsetWidth;
    this.setState({ ...this.state, position: this.state.position-- });
    this.setState({
      ...this.state,
      offset: this.state.offset - (itemWidth + 2) * 5,
    });
  };

  handleNext = (element) => {
    if (this.state.position >= this.state.nbViewports) return;
    this.setState({ ...this.state, position: this.state.position++ }, () => {});
    let itemWidth = element.current.offsetWidth;
    this.setState({
      ...this.state,
      offset: this.state.offset + (itemWidth + 2) * 5,
    });
  };

  render() {
    return (
      <SliderContextProvider>
        <SliderContextConsumer>
          {({ itemRef }) => (
            <div className="slider-container">
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
                        title={el.title}
                        key={el.imdbID}
                        imdbID={el.imdbID}
                        coverUrl={el.coverUrl}
                        hoverCoverUrl={el.hoverCoverUrl}
                        genre={el.genre}
                        duration={el.duration}
                      />
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  this.handleNext(itemRef);
                }}
              >
                Next
              </button>
              <button
                onClick={() => {
                  this.handlePrev(itemRef);
                }}
              >
                Previous
              </button>
            </div>
          )}
        </SliderContextConsumer>
      </SliderContextProvider>
    );
  }
}
