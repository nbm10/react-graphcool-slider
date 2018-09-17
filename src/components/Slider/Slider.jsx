import React, { Component } from 'react';
import Slide from '../Slide/Slide';
import NextArrow from '../Arrows/NextArrow/NextArrow';
import PreviousArrow from '../Arrows/PreviousArrow/PreviousArrow';
import SliderDots from '../SliderDots/SliderDots';


class Slider extends Component {
  state = {
    activeSlide: 0,
  };

  getSlide = (index) => {
    this.setState({
      activeSlide: index
    })
  };

  getPrevSlide = (e) => {
    e.preventDefault();

    let index = this.state.activeSlide;
    let { images } = this.props;
    let slidesLength = images.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    this.setState({
      activeSlide: index,
    })
  };

  getNextSlide = (e) => {
    e.preventDefault();

    let index = this.state.activeSlide;
    let { images } = this.props;
    let slidesLength = images.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeSlide: index,
    });

  };

  renderSlides = () => (
      this.props.images.map((image, index) =>
          <Slide
              key={index}
              index={index}
              activeSlide={this.state.activeSlide}
              image={image}
          />)
  );

  renderIndicatorDots = () => (
      this.props.images.map((image, index) =>
          <SliderDots
              key={index}
              index={index}
              activeSlide={this.state.activeSlide}
              isActive={this.state.activeSlide === index}
              getSlide={() => this.getSlide(index)}
          />)
  );

  render() {
    return(
        <div className="sliderContent">
          <PreviousArrow prevSlide={this.getPrevSlide}/>
          <ul className="slidesContent">
            {this.renderSlides()}
          </ul>
          <NextArrow nextSlide={this.getNextSlide}/>
          <ul className="dotWrapper">
            {this.renderIndicatorDots()}
          </ul>
        </div>
    )
  }
}

export default Slider;