import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});





echo "# HOTEL" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sohil29/HOTEL.git
git push -u origin main



git remote add origin https://github.com/sohil29/HOTEL.git
git branch -M main
git push -u origin main