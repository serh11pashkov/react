
import React from 'react';

import ReservationForm from '../../components/ReservationForm/ReservationForm';
import useAuth  from '../../hooks/useAuth'; 

const BookTable = () => {
  const { user } = useAuth(); 

  return (
    <div>
      <ReservationForm userEmail={user ? user.email : ''} />
    </div>
  );
};

export default BookTable;
