/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/prevent-abbreviations */
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

import { db } from '../../firebase/firebase';

export function useContactForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendMessage = async (messageData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const documentReference = await addDoc(collection(db, 'messages'), messageData);
            console.log('Document written with ID:', documentReference.id);
            setSuccess(true);
        } catch (error_) {
            console.error('Error adding document:', error_.message);
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading, error, success };
}
