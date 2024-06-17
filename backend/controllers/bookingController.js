const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');
const sendEmail = require('../utils/sendEmail');

const createBooking = asyncHandler(async (req, res) => {
  const { date, time, description, price } = req.body;

  const booking = new Booking({
    user: req.user._id,
    date,
    time,
    description,
    price
  });

  const createdBooking = await booking.save();

  // Send payment details via email
  const emailContent = `
    <h1>Booking Confirmation</h1>
    <p>Dear ${req.user.name},</p>
    <p>Thank you for your booking.</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Price:</strong> $${price}</p>
  `;

  await sendEmail(req.user.email, 'Booking Confirmation', emailContent);

  res.status(201).json(createdBooking);
});

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id });
  res.json(bookings);
});

module.exports = { createBooking, getBookings };