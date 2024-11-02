import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../firebase/firebase'; // Adjust path as needed
import userImage from '../../assets/avatar.png'
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const user = auth.currentUser; // Get the current user from Firebase

  const handleLogout = async () => {
    await auth.signOut(); // Sign out from Firebase
    setShowMenu(false); // Close the menu on logout
  };

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
          {user ? (
            <>
              <li><Link to="/reservation"><button>Book a Table</button></Link></li>
              <li>
                <div className={styles.avatarContainer}>
                  <img 
                    src={userImage} 
                    alt="User Avatar" 
                    className={styles.avatar} 
                    onClick={() => setShowMenu(!showMenu)} 
                  />
                  {showMenu && (
                    <div className={styles.menu}>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
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
  );
}

export default Navbar;
