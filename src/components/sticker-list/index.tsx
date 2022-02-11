import React from 'react';
import { Images } from '../../images';
import Sticker from '../stickers';
import styles from './sticker.module.css';

interface Imageprops {
  Images: {
    image: string;
  }[];
}

const StickerList: React.FC<Imageprops> = () => {
  return (
    <div className={styles.container}>
      {Images.map((el, index) => {
        return <Sticker key={index} image={el.image} />;
      })}
    </div>
  );
};

export default StickerList;
