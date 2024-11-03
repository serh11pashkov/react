import React from 'react';
import { useLocation } from 'react-router-dom';

import BackgroundAbout from '../../assets/BackgroundAbout.jpg';
// import BackgroundContact from '../../assets/BackgroundContact.jpg';
import BackgroundGallery from '../../assets/BackgroundGallery.jpg';
import BackgroundHome from '../../assets/BackgroundHome.jpg';
import styles from './Hero.module.css';
import HeroText from './HeroText.jsx';

function Hero() {
    const location = useLocation();

    const backgrounds = {
        '/': { color: '#D2A38A', image: BackgroundHome },
        '/about': { color: '#B6828C', image: BackgroundAbout },
        '/gallery': { color: '#B6828C', image: BackgroundGallery },
        '/contact': { color: '#B6828C', image: BackgroundHome },
    };

    const currentBackground = backgrounds[location.pathname] || backgrounds['/'];

    const getVariant = () => {
        switch (location.pathname) {
            case '/': {
                return 'home';
            }
            case '/about': {
                return 'about';
            }
            case '/gallery': {
                return 'gallery';
            }
            case '/contact': {
                return 'contact';
            }
            default: {
                return 'home';
            }
        }
    };

    return (
        <div className={styles.splitContainer}>
            <div
                className={styles.left}
                style={{ backgroundColor: currentBackground.color }}
                data-testid="left-background"
            ></div>
            <div className={styles.right}>
                <img src={currentBackground.image} alt="Background" data-testid="background-image" />
            </div>
            <div className={styles.overlayText} data-testid="hero-text">
                <HeroText variant={getVariant()} />
            </div>
        </div>
    );
}

export default Hero;
