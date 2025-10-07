import mongoose, { Schema } from "mongoose";

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    artist: {
      type: String,
      required: true,
      trim: true,
    },
    album: {
      type: String,
    },
    genre: {
      type: String,
    },
    albumImage: {
      type: String,
    },
    youtubeId: {
      type: String,
    },
    lyrics: {
      type: String,
    },
    tab: {
      type: String,
    },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);
export default Song;
