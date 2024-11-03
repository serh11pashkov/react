import React from 'react';

import image2 from '../../assets/gallery/coffee5.jpg';
import image1 from '../../assets/gallery/coffee7.jpg';
import styles from './AboutUsGrid.module.css';

function AboutUsGrid() {
    return (
        <section className={styles.aboutUsSection}>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h3>Our Story</h3>
                    <p>
                        We are passionate about providing the perfect blend of cozy atmosphere, fresh coffee, and great
                        books. Our café is designed to be a relaxing escape for those who appreciate the finer things in
                        life.
                    </p>
                </div>
                <div className={styles.gridItem}>
                    <img src={image1} alt="Our Café" className={styles.image} />
                </div>
                <div className={styles.gridItem}>
                    <img src={image2} alt="Reading Corner" className={styles.image} />
                </div>
                <div className={styles.gridItem}>
                    <h3>Our Vision</h3>
                    <p>
                        Our vision is to create a community space where people can unwind, read their favorite books,
                        and enjoy high-quality coffee, all while feeling at home.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUsGrid;
