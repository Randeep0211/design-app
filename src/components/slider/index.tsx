import React from 'react';
import image from '../../assets/1.png';
import styles from './slider.module.css';

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOne}>
        <div>
          <p className={styles.tag}>Orenda!</p>
        </div>
        <div>
          <h1>A Modern Bootstrap 4 HTML template</h1>
        </div>
        <div>
          <p className={styles.description}>
            The essential template for the modern Apps
          </p>
        </div>
        <div>
          <button className={styles.button}>Request a trial</button>
        </div>
      </div>

      <div>
        <img className={styles.img} src={image} alt="image" />
      </div>
    </div>
  );
};

export default Slider;
