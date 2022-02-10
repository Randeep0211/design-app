import React from 'react';
import styles from './review.module.css';
import image1 from '../../assets/5s-logo.png';
import image2 from '../../assets/woman.jpg';

const Review = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOne}>
        <div className={styles.image1}>
          <img className={styles.image1} src={image1} alt="image" />
        </div>

        <div>
          <p>
            After we've tried every possible template in the market, we found
            Orenda and it was the only with all the features we're looking for.
          </p>
        </div>

        <div>
          <hr />
        </div>

        <p className={styles.title}>Jane Doe,</p>
        <p className={styles.position}>5Studios Design Lead</p>
      </div>

      <img className={styles.image} src={image2} alt="image" />
    </div>
  );
};

export default Review;
