import React from 'react';
import styles from './orendo.module.css';

interface OrendoDetailProps {
  image: string;
  title: string;
  description: string;
}

const OrendoList: React.FC<OrendoDetailProps> = (props) => {
  return (
    <div>
      <img className={styles.img} src={props.image} alt="image" />
      <h2>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default OrendoList;
