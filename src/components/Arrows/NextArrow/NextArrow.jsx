import React from 'react';

const NextArrow = ({ nextSlide }) => {
  return (
      <a className="sliderArrow sliderArrow--right" onClick={nextSlide}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
  )
};

export default NextArrow;