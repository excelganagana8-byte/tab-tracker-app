import Song from "../models/Song.js";

//get all songs
export const index = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get song with an id of :id
export const show = async (req, res) => {
  try {
    const songs = await Song.findById(req.params.songsId);
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create a new song
export const createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json({ message: "Songs Created Successfully", song });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a song
export const updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(
      req.params.songsId, // matches router
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
