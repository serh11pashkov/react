import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../firebase/firebase'; // Adjust path as needed
import avatar from '../../assets/avatar.png';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setMenuOpen(false); // Close menu on logout
  };

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous); // Toggle menu visibility
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.nav}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/reservation"><button>Book a Table</button></Link></li>
                <li className={styles.avatarContainer}>
                  <img 
                    src={avatar} 
                    alt="Avatar" 
                    className={styles.avatar} 
                    onClick={toggleMenu} 
                  />
                  {menuOpen && (
                    <div className={styles.menu}>
                      <button className={styles.logoutButton}onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login"><button>Login</button></Link></li>
                <li><Link to="/register"><button>Register</button></Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
