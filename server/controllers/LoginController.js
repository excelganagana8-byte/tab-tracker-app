import User from "../models/User.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map((e) => ({
        field: e.param,
        message: e.msg,
      }));
      return res.status(400).json({ errors: formattedErrors });
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Compare provided password with hashed password in DB
    const isMatched = await bcrypt.compare(password, existingUser.password);
    if (!isMatched) {
      return res.status(400).json({ message: "Wrong Password" });
    }

    // ✅ Generate JWT token
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1h" } // token expires in 1 hour
    );

    // Success response
    res.status(200).json({
      message: `Welcome back ${existingUser.email}!`,
      token, // send token back to frontend
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
