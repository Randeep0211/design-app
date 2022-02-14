import React from 'react';
import TemplateSlider from '../../components/template-slider-section';
import Orendo from '../../components/orendo';
import Review from '../../components/review';
import StickerList from '../../components/sticker-list';
import { Images } from '../../images';
import { OrendoData } from '../../data';

const Homepage = () => {
  return (
    <div>
      <TemplateSlider />
      <StickerList Images={Images} />
      <Orendo />
      <Review />
    </div>
  );
};

export default Homepage;
