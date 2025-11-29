import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3005,
  jwtSecret: process.env.JWT_SECRET || "supersecret",
  mongoUri: process.env.MONGODB_URI,
};

export default config;
