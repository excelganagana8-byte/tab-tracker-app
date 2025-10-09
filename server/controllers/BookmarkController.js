// controllers/BookmarkController.js
import Bookmark from "../models/BookMark.js";

export const index = async (req, res) => {
  try {
    // Get user ID from query string (?user=123) or from req.body (if needed)
    const { user } = req.query;

    if (!user) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Find all bookmarks for this user, and populate the song info
    const bookmarks = await Bookmark.find({ user }).populate("song");

    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { user, song } = req.body;
    const bookmark = await Bookmark.create({ user, song });
    res.status(201).json({ message: "Bookmark added", bookmark });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params; // this could be songId or bookmarkId
    const { user } = req.body;
    const deleted = await Bookmark.findOneAndDelete({ song: id, user });
    if (!deleted)
      return res.status(404).json({ message: "Bookmark not found" });
    res.json({ message: "Bookmark removed" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
