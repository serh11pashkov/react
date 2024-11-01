import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login"><button>Login</button></Link></li>
          <li><Link to="/register"><button>Register</button></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;