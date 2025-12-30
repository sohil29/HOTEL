import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT,"0.0.0.0" () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
