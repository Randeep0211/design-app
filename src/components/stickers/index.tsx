import React from 'react';
import styles from './sticker.module.css';
import image1 from '../../assets/1.svg';
import image2 from '../../assets/2.svg';
import image3 from '../../assets/3.svg';
import image4 from '../../assets/4.svg';

const Sticker = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image1} alt="image" />
      <img className={styles.img} src={image2} alt="image" />
      <img className={styles.img} src={image3} alt="image" />
      <img className={styles.img} src={image4} alt="image" />
    </div>
  );
};

export default Sticker;
