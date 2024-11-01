import React from 'react';
import { Link } from 'react-router-dom';

import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <div className={styles.registerBody}>
      <div className={styles.registerContainer}>
        <div className={styles.registerHeader}>
          <Link to="/" className={styles.backArrow}>&larr;</Link>
          <h2 className={styles.title}>Register</h2>
        </div>
        <form>
          <label className={styles.label}>Name</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}>Email/Mobile Phone</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} />

          <button type="submit" className={styles.button}>Register</button>
        </form>
        <p className={styles.footerText}>
          Have an account? <Link to="/login" className={styles.signUpLink}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
