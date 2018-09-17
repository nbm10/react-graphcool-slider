import React from 'react';

const PreviousArrow = ({ prevSlide }) => {
  return (
      <a className="sliderArrow sliderArrow--left" onClick={prevSlide}>
        <span className="fa fa-angle-left fa-2x" />
      </a>
  )
};

export default PreviousArrow;