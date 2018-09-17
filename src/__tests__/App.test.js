import React from 'react';
import App, { GET_SLIDES } from '../App';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NextArrow from '../components/Arrows/NextArrow/NextArrow';

const mockedData = {
  slides: [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/react-slider.appspot.com/o/richard-jacobs-541439-unsplash_1920x1080.jpg?alt=media&token=c147b1d0-b94d-4f14-8da3-40d5545257a7",
      description: "A family that thirsts together sticks together.",
      __typename: "Slide",
      id: "cjly171lw1nd90b017dj4jjux",
      title: "The elephant family"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/react-slider.appspot.com/o/erik-jan-leusink-180382-unsplash_1920x1080.jpg?alt=media&token=c5d1e879-9960-44b9-90b0-ebe3fab250ee",
      description: "If looks could kill, this cat would be responsible for mass murders.",
      __typename: "Slide",
      id: "cjly1adod1o1j0b01rseyow30",
      title: "Kitty the cat"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/react-slider.appspot.com/o/rodion-kutsaev-69516-unsplash_1920x1080.jpg?alt=media&token=71c98452-60e4-4ed7-b9e8-f596119c7624",
      description: "A symbol of love as many would see it.",
      __typename: "Slide",
      id: "cjly1c1k91ogv0b01pnd93qg0",
      title: "Electric Rose"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/react-slider.appspot.com/o/john-gibbons-311400-unsplash_1920x1080.jpg?alt=media&token=4bae6f86-6b19-476b-946c-f1a8d33abdd5",
      description: "This is what Joburg CBD streets aspire to... well maybe not.",
      __typename: "Slide",
      id: "cjly1daar1onr0b01m6b7f2cu",
      title: "These Streets"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/react-slider.appspot.com/o/erico-marcelino-235177-unsplash_1_1920x1080.jpg?alt=media&token=a535c5ef-d123-432c-85d7-ec896fb0e124",
      description: "Like the proverbial cheese, this tree stands alone.",
      __typename: "Slide",
      id: "cjly1ennv1r630b01db69b1q3",
      title: "These Streets"
    }
  ]
};

const mocks = [
  {
    request: {
      query: GET_SLIDES,
      variables: {}
    },
    result: {
      data: mockedData
    },
  },
];

describe('App', () => {
  it('renders with data correctly', () => {
    const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <App/>
        </MockedProvider>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper
        .find('Slider')
        .find('Slide')
        .find('SliderDots')
        .find('PreviousArrow')
        .find('NextArrow')
    );
  });
});

