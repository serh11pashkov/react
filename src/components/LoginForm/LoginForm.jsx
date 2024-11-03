/* eslint-disable unicorn/prevent-abbreviations */
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../../firebase/firebase';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch {
            setError('Failed to login. Please check your credentials and try again.');
        }
    };

    return (
        <div className={styles.loginBody}>
            <div className={styles.loginContainer}>
                <div className={styles.loginHeader}>
                    <Link to="/" className={styles.backArrow}>
                        &larr;
                    </Link>
                    <h2 className={styles.title}>Login</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <label className={styles.label}>Email/Mobile Phone</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className={styles.label}>Password</label>
                    <input
                        type="password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className={`${styles.error} error`}>{error}</p>}

                    <button type="submit" className={styles.button}>
                        Sign in
                    </button>
                </form>
                <p className={styles.footerText}>
                    Don&apos;t have an account?{' '}
                    <Link to="/register" className={styles.signUpLink}>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
