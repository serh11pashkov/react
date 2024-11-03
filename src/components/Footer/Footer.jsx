import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.hours}>
          <p>Monday — Friday: 08:00-22:00</p>
          <p>Saturday: 10:00-20:00</p>
          <p>Sunday: 10:00-18:00</p>
        </div>
        <div className={styles.contact}>
          <p>
            <span className={styles.icon}>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            T. Shevchenko street, 789, Uzhhorod, 88000
          </p>
          <p>
            <span className={styles.icon}>
              <i className="fas fa-phone-alt"></i>
            </span>
            +380505050050
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
