import React from 'react';
import TemplateSlider from '../../components/template-slider-section';
import OrendoDetail from '../../components/orendo-detail';
import Review from '../../components/review';
import Sticker from '../../components/stickers';

const Homepage = () => {
  return (
    <div>
      <TemplateSlider />
      <Sticker />
      <OrendoDetail />
      <Review />
    </div>
  );
};

export default Homepage;
