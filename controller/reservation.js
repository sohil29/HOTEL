import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";


const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  console.log("Received reservation data:", { firstName, lastName, email, date, time, phone });
  if (!firstName || !lastName || !email || !date) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    // Combine date and time into a single Date object
    const reservationDate = time ? new Date(`${date}T${time}`) : new Date(date);
    await Reservation.create({ firstName, lastName, email, reservationDate, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default send_reservation;

