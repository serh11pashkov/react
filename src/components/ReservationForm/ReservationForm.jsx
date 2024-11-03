/* eslint-disable unicorn/prevent-abbreviations */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useReservationForm } from '../../hooks/useReservationForm';
import styles from './ReservationForm.module.css';

const ReservationForm = () => {
    const { reserveTable, loading, error, success } = useReservationForm();
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        mobile: '',
    });

    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 5);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const minTime = () => {
        const selectedDate = new Date(formData.date);
        if (selectedDate.toDateString() === today.toDateString()) {
            const minTimeDate = new Date(today);
            minTimeDate.setMinutes(minTimeDate.getMinutes() + 30);
            return minTimeDate.toTimeString().split(' ')[0].slice(0, 5);
        }
        return '08:00';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/^(?:\+?380|0)?\d{9}$/.test(formData.mobile)) {
            alert('Please enter a valid mobile number (10 digits or +380 format).');
            return;
        }
        await reserveTable(formData);
        setFormData({ date: '', time: '', mobile: '' });
    };

    return (
        <div className={styles.reservationBody}>
            <div className={styles.reservationContainer}>
                <div className={styles.header}>
                    <Link to="/" className={styles.backArrow}>
                        &larr;{' '}
                    </Link>
                    <h2 className={styles.title}>Book a Table</h2>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={styles.input}
                        min={today.toISOString().split('T')[0]}
                        max={maxDate.toISOString().split('T')[0]}
                    />
                    <label className={styles.label}>Time</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={styles.input}
                        min={minTime()}
                        max="20:00"
                    />
                    <label className={styles.label}>Mobile Phone</label>
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Enter your mobile number"
                        required
                    />
                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? 'Booking...' : 'Reserve'}
                    </button>
                    {error && <p className={styles.error}>{error}</p>}
                    {success && <p className={styles.success}>Reservation successful!</p>}
                </form>
            </div>
        </div>
    );
};

ReservationForm.propTypes = {
    userEmail: PropTypes.string,
};

export default ReservationForm;
