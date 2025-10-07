import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import authRoutes from "./routes/auth.js"; // import your router
import songRoutes from "./routes/songs.js";

dotenv.config();

const app = express();

// Middleware
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

connectDB();

// Use routes
app.use("/api", authRoutes);
app.use("/api/songs", songRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
