import React, { Component } from "react";
const Slider = ({ children }) => {
  // const contextValue = {
  //   onSelectSlide: handleSelect,
  //   onCloseSlide: handleClose,
  //   elementRef,
  //   currentSlide,
  // };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slider">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
      <button onClick={() => {}} type="prev">
        prev
      </button>
      <button onClick={() => {}} type="next">
        next
      </button>
    </div>
  );
};

export default Slider;
