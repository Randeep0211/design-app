import React from 'react';
import styles from './sticker.module.css';

interface StickerProps {
  image: string;
}

const Sticker: React.FC<StickerProps> = (props) => {
  return (
    <div>
      <img className={styles.img} src={props.image} alt="image" />
    </div>
  );
};

export default Sticker;
