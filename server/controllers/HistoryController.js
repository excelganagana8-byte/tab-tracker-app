// controllers/HistoryController.js
import History from "../models/History.js";

export const index = async (req, res) => {
  try {
    const { user } = req.query;
    if (!user) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Find all history for this user, and populate song info
    const histories = await History.find({ user }).populate("song");
    res.status(200).json(histories);
  } catch (error) {
    console.error("❌ Error fetching history:", error);
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { user, song } = req.body;

    // Prevent duplicates: if exists, just update timestamp
    const existing = await History.findOne({ user, song });
    if (existing) {
      existing.updatedAt = new Date();
      await existing.save();
      return res
        .status(200)
        .json({ message: "History updated", history: existing });
    }

    const history = await History.create({ user, song });
    res.status(201).json({ message: "History added", history });
  } catch (error) {
    console.error("❌ Error creating history:", error);
    res.status(400).json({ error: error.message });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params; // songId
    const { user } = req.body;

    const deleted = await History.findOneAndDelete({ song: id, user });
    if (!deleted) return res.status(404).json({ message: "History not found" });

    res.json({ message: "History removed" });
  } catch (error) {
    console.error("❌ Error deleting history item:", error);
    res.status(400).json({ error: error.message });
  }
};

export const deleteAll = async (req, res) => {
  try {
    const { user } = req.body;
    await History.deleteMany({ user });
    res.status(200).json({ message: "All history cleared successfully" });
  } catch (err) {
    console.error("❌ Error clearing history:", err);
    res.status(500).json({ error: "Failed to clear all history" });
  }
};
