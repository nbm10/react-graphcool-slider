import React from 'react';

const SliderDots = ({ index, activeSlide, getSlide }) => {
  return (
      <li>
        <a
          className={index === activeSlide ? "dot dot--active": "dot"}
          onClick={getSlide} />
      </li>
  )
};

export default SliderDots;