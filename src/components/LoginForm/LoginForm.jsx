import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.loginBody}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}> 
          <Link to="/" className={styles.backArrow}>&larr;</Link>
          <h2 className={styles.title}>Login</h2>
        </div>
        <form>
          <label className={styles.label}>Email/Mobile Phone</label>
          <input type="text" className={styles.input} />
          
          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} />
          
          <button type="submit" className={styles.button}>Sign in</button>
        </form>
        <p className={styles.footerText}>
          Don&apos;t have an account? <Link to="/register" className={styles.signUpLink}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
