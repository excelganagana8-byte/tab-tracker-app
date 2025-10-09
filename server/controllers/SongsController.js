import Song from "../models/Song.js";

// Get all songs with search
export const index = async (req, res) => {
  try {
    const { search } = req.query;
    let songs;

    if (search) {
      // Search by song title OR artist (case-insensitive)
      songs = await Song.find({
        $or: [
          { title: { $regex: search, $options: "i" } },
          { artist: { $regex: search, $options: "i" } },
        ],
      });
    } else {
      // Get all songs
      songs = await Song.find();
    }

    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get song by ID (frontend uses :id)
export const show = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id); // <-- changed to 'id'
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new song
export const createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json({ message: "Song Created Successfully", song });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a song by ID (frontend uses :id)
export const updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(
      req.params.id, // <-- changed to 'id'
      { $set: req.body },
      { new: true }
    );

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.status(200).json({ message: "Song updated successfully", song });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
