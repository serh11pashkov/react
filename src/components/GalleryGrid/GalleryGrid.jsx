// components/GalleryGrid/GalleryGrid.jsx
import React from 'react';

import coffee1 from '../../assets/gallery/coffee1.jpg';
import coffee2 from '../../assets/gallery/coffee2.jpg';
import coffee3 from '../../assets/gallery/coffee3.jpg';
import coffee4 from '../../assets/gallery/coffee4.jpg';
import coffee5 from '../../assets/gallery/coffee5.jpg';
import coffee6 from '../../assets/gallery/coffee6.jpg';
import coffee7 from '../../assets/gallery/coffee7.jpg';
import coffee8 from '../../assets/gallery/coffee8.jpg';
import coffee9 from '../../assets/gallery/coffee9.jpg';
import styles from './GalleryGrid.module.css';

const GalleryGrid = () => {
  const images = [
    { id: 1, src: coffee1, title: 'Coffee Experience' },
    { id: 2, src: coffee2, title: 'Reading Corner' },
    { id: 3, src: coffee3, title: 'Cozy Atmosphere' },
    { id: 4, src: coffee4, title: 'Book Collection' },
    { id: 5, src: coffee5, title: 'Coffee Art' },
    { id: 6, src: coffee6, title: 'Library View' },
    { id: 7, src: coffee7, title: 'Coffee Table' },
    { id: 8, src: coffee8, title: 'Baristas' },
    { id: 9, src: coffee9, title: 'Relaxation' },
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h1>Our Place</h1>
          <p>Welcome to our cozy corner where coffee meets literature. 
             Discover the perfect blend of ambiance and comfort in our carefully curated space.</p>
        </div>
        <div className={styles.galleryGrid}>
          {images.map((image) => (
            <div key={image.id} className={styles.galleryItem}>
              <img src={image.src} alt={image.title} />
              <div className={styles.overlay}>
 <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;