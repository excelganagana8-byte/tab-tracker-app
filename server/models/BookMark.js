import mongoose, { Schema } from "mongoose";

const bookmarkSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId, // ✅ capital “O” and “I”
      ref: "User",
      required: true,
    },
    song: {
      type: Schema.Types.ObjectId, // ✅ same fix here
      ref: "Song",
      required: true, // ✅ you missed a comma before this
    },
  },
  { timestamps: true }
);

// ✅ Prevent duplicate bookmarks for same user+song combo
bookmarkSchema.index({ user: 1, song: 1 }, { unique: true });

export default mongoose.model("Bookmark", bookmarkSchema);
