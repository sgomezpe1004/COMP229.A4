import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./server/express.js";

const PORT = process.env.PORT || 3005;
const mongoUri = process.env.MONGODB_URI;

console.log("Mongo URI:", mongoUri);

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => {
    console.error("❌ Unable to connect to DB:", err);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log("🚀 Server running on http://localhost:" + PORT);
});
