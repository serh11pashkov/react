// src/pages/Gallery/Gallery.jsx
import React from 'react';

import Footer from '../../components/Footer/Footer'
import GalleryGrid from '../../components/GalleryGrid/GalleryGrid';  
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
    
const Gallery = () => {
  return (
    <div>
      <Header />
       <Hero />
      <GalleryGrid />
      <Footer />
    </div>
  );
};

export default Gallery;