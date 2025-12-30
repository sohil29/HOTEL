import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config();

const app = express();

// ✅ CORS (ONLY HERE)
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Preflight support
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// ✅ DB connection
dbConnection();

// ✅ Error middleware (LAST)
app.use(errorMiddleware);

export default app;
