import React from 'react';
import { Link } from 'react-router-dom'; 

import styles from './HeroText.module.css';

function HeroText({ variant }) {
  const renderHomeContent = () => (
    <div className={styles.text}>
      <h1 className={styles.pretitle}>The place to enjoy </h1>
      <h1 className={styles.title}>Good books &</h1>
      <h1 className={styles.title}>fresh coffee.</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
      <Link to="/about"> 
        <button className={styles.button}>Read more</button>
      </Link>
    </div>
  );

  const renderAboutContent = () => (
    <div className={styles.text}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Discover our story and passion for coffee and books
      </p>
    </div>
  );

  const renderGalleryContent = () => (
    <div className={styles.text}>
      <h1 className={styles.title}>Our Gallery</h1>
    </div>
  );

  const renderContactContent = () => (
    <div className={styles.text}>
      <h1 className={styles.title}>Contact Us</h1>
    </div>
  );

  const variants = {
    home: renderHomeContent,
    about: renderAboutContent,
    gallery: renderGalleryContent,
    contact: renderContactContent,
  };

  return variants[variant]();
}

export default HeroText;
