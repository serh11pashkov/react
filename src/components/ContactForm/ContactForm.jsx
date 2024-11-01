import React from 'react';

import styles from './ContactForm.module.css';

function ContactForm() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.content}>
        <div className={styles.messageInfo}>
  <h1>Send Us A <br /> Message</h1>
  <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
</div>
          <form className={styles.form}>
            <div className={styles.nameFields}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First</label>
                <input type="text" id="firstName" name="firstName" placeholder="First" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
