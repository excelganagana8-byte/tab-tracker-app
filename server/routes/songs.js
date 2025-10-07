import express from "express";
import { index, createSong, show } from "../controllers/SongsController.js";

const router = express.Router();

router.get("/", index);
router.post("/", createSong);
router.get("/:songsId", show);

export default router;
