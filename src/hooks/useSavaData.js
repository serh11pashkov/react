
import { addDoc,collection } from 'firebase/firestore';
import { useState } from 'react';

import { db as database } from '../../firebase/firebase'; 

const useSaveData = (collectionName) => {
  // eslint-disable-next-line unicorn/no-null
  const [error, setError] = useState(null);

  const saveData = async (data) => {
    try {
      const documentReference = await addDoc(collection(database, collectionName), data);
      console.log("Document written with ID:", documentReference.id);
      return documentReference;
    } catch (error_) {
      setError("Failed to save data.");
      console.error("Error adding document:", error_);
    }
  };

  return { saveData, error };
};

export default useSaveData;
