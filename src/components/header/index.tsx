import React from 'react';
import logo from '../../assets/logo.png';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img src={logo} alt="image" />
      </div>

      <div className={styles.container}>
        <div>
          <span>Home</span>
        </div>

        <div>
          <span>Features</span>
        </div>

        <div>
          <span>Pricing</span>
        </div>

        <div>
          <span>Download</span>
        </div>

        <div>
          <span>Contact</span>
        </div>

        <div>
          <button className={styles.button}>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
