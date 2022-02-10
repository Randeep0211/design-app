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
          <a href="/">
            <span>Home</span>
          </a>
        </div>

        <div>
          <a href="">
            <span>Features</span>
          </a>
        </div>

        <div>
          <a href="">
            <span>Pricing</span>
          </a>
        </div>

        <div>
          <a href="">
            <span>Download</span>
          </a>
        </div>

        <div>
          <a href="">
            <span>Contact</span>
          </a>
        </div>

        <div>
          <button className={styles.button}>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
