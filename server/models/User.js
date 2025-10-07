import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true, minLength: 6 },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
