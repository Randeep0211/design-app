import React, { useEffect, useState } from 'react';
import styles from './orendo.module.css';
import OrendoList from '../orendo-list';
// import { OrendoData } from '../../data';
import axios from 'axios';

interface OrendoProps {
  image: string;
  title: string;
  description: string;
}

const Orendo = () => {
  const [data, setData] = React.useState<OrendoProps[]>([]);

  const getData = async () => {
    try {
      const data = await axios.get('http://localhost:4000/data');
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <span>WHY ORENDA?</span>
      </div>
      <div className={styles.title}>
        <span>Companies choose Orenda because</span>
      </div>
      <div className={styles.containerOne}>
        {data.map((el, index) => {
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
