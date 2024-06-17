import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking } from '../actions/bookingActions';

const BookingScreen = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const bookingCreate = useSelector((state) => state.bookingCreate);
  const { success, error } = bookingCreate;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBooking({ date, time, description, price }));
  };

  return (
    <div>
      <h2>Book Now</h2>
      {error && <p>{error}</p>}
      {success && <p>Booking created successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div
