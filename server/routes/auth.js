// routes/auth.js
import express from "express";
import { body } from "express-validator";
import { register } from "../controllers/AuthenticationController.js";
import { login } from "../controllers/LoginController.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Enter a valid email"),

    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  register
);

router.post(
  "/login",
  [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("enter a valid email"),

    body("password").notEmpty().withMessage("password is required"),
  ],
  login
);

export default router;
