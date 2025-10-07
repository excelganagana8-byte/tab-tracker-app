// controllers/AuthenticationController.js
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Format errors for frontend
      const formattedErrors = errors
        .array()
        .map((e) => ({ field: e.param, message: e.msg }));
      return res.status(400).json({ errors: formattedErrors });
    }

    const { email, password } = req.body;

    //check for an existing user
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    //make password hashed
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashedPassword });
    await user.save();

    res
      .status(201)
      .json({ message: `Hello ${email}! Your user was registered` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
