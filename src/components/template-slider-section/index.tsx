import React from 'react';
import styles from './slider.module.css';
import Header from '../header';
import Slider from '../slider';

const TemplateSlider = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Slider />
    </div>
  );
};

export default TemplateSlider;
