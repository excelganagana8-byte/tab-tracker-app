import mongoose, { Schema } from "mongoose";

const historySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    song: {
      type: Schema.Types.ObjectId,
      ref: "Song",
      required: true, //
    },
  },
  { timestamps: true }
);

// ✅ Prevent duplicate history for same user+song combo
historySchema.index({ user: 1, song: 1 }, { unique: true });

export default mongoose.model("History", historySchema);
