import React from 'react'

import Hero from '../../components/Hero/Hero.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import styles from'./Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home;
