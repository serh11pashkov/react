/* eslint-disable unicorn/no-null */
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

import { db as database } from '../../firebase/firebase';

export const useReservationForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const reserveTable = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const reservationReference = collection(database, 'reservations');
      await addDoc(reservationReference, {
        mobile: formData.mobile, 
        date: formData.date,      
        time: formData.time,      
        
      });
      setSuccess(true);
    } catch (error_) {
      console.error("Error saving reservation:", error_);
      setError("Failed to reserve the table. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { reserveTable, loading, error, success };
};
