/* eslint-disable unicorn/prevent-abbreviations */
import React, { useState } from 'react';

import { useContactForm } from '../../hooks/useContactForm';
import styles from './ContactForm.module.css';

function ContactForm() {
    const { sendMessage, loading, error, success } = useContactForm();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendMessage(formData);

        if (success) {
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        }
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.content}>
                    <div className={styles.messageInfo}>
                        <h1>
                            Send Us A <br /> Message
                        </h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.nameFields}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last"
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                        {error && <p className={styles.error}>{error}</p>}
                        {success && <p className={styles.success}>Message sent successfully!</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
