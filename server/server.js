import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

import authRoutes from "./routes/auth.js";
import songRoutes from "./routes/songs.js";
import bookmarkRoutes from "./routes/bookmark.js";
import historyRoutes from "./routes/history.js";

dotenv.config();

const app = express();

// Middleware
app.use(morgan("combined"));
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/history", historyRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    message: `${process.env.APP_NAME || "Tab Tracker"} API is running`,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
