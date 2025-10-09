import express from "express";
import {
  index,
  createSong,
  show,
  updateSong,
} from "../controllers/SongsController.js";

const router = express.Router();

router.get("/", index);
router.post("/", createSong);
router.get("/:id", show);
router.patch("/:id", updateSong);

export default router;
