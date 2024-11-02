import './About.module.css';

import React from 'react'

import AboutUsGrid from '../../components/AboutUsGrid.jsx/AboutUsGrid.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx'
import Hero from '../../components/Hero/Hero.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <AboutUsGrid />
      <Footer />
    </div>
  )
}

export default Home;
