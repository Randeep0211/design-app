import React from 'react';
import styles from './orendo.module.css';
import OrendoList from '../orendo-list';
import { OrendoData } from '../../data';

interface OrendoProps {
  OrendoData: {
    image: string;
    title: string;
    description: string;
  }[];
}

const Orendo: React.FC<OrendoProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <span>WHY ORENDA?</span>
      </div>
      <div className={styles.title}>
        <span>Companies choose Orenda because</span>
      </div>
      <div className={styles.containerOne}>
        {OrendoData.map((el, index) => {
          return (
            <OrendoList
              key={index}
              image={el.image}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orendo;
