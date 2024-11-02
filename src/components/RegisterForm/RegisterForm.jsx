/* eslint-disable unicorn/prevent-abbreviations */

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from "../../../firebase/firebase";
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); 
    } catch {
      setError("Failed to register. Please check your details and try again.");
    }
  };

  return (
    <div className={styles.registerBody}>
      <div className={styles.registerContainer}>
        <div className={styles.registerHeader}>
          <Link to="/" className={styles.backArrow}>&larr;</Link>
          <h2 className={styles.title}>Register</h2>
        </div>
        <form onSubmit={handleRegister}>
          <label className={styles.label}>Email/Mobile Phone</label>
          <input type="text" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />

          {error && <p className={styles.error}>{error}</p>}

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
