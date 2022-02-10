import React from 'react';
import styles from './orendo.module.css';
import image1 from '../../assets/graphic-design.svg';
import image2 from '../../assets/checklist.svg';
import image3 from '../../assets/startup.svg';

const OrendoDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <span>WHY ORENDA?</span>
      </div>
      <div className={styles.title}>
        <span>Companies choose Orenda because</span>
      </div>

      <div className={styles.containerOne}>
        <div>
          <img className={styles.img1} src={image1} alt="image" />
          <h2>Top notch technology</h2>
          <p className={styles.description}>
            Stay at the top of the trends, we have used the latest tools and
            frameworks to keep your web neat and nice
          </p>
        </div>

        <div>
          <img className={styles.img2} src={image2} alt="image" />
          <h2>Reduce development time</h2>
          <p className={styles.description}>
            Because time matters. We have built Orenda to make your development
            and launching process as fast as possible
          </p>
        </div>

        <div>
          <img className={styles.img3} src={image3} alt="image" />
          <h2>Ready-to-use content</h2>
          <p className={styles.description}>
            Orenda comes with multiple design interfaces which you can use
            'right out of the box', you just focus on your business
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrendoDetail;
