import React from 'react';

const Slide = ({ index, activeSlide, image }) => {
  return (
      <li className={(index === activeSlide) ? 'slideContent slideContent--active': 'slideContent'}>
        <img src={image.url} alt="First Slide" className="slideImage"/>
        <p className='slideDescription'>{image.description}</p>
      </li>
  )
};

export default Slide;