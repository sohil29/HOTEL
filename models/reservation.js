import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 Characters."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  reservationDate: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        return value >= new Date();
      },
      message: "Reservation date and time must be in the future."
    }
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: false,
    minLength: [10, "Phone number must contain at least 10 Digits."],
    maxLength: [15, "Phone number cannot exceed 15 Digits."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
