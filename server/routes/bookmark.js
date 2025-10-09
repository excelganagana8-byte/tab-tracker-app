import express from "express";
import { index, create, destroy } from "../controllers/BookmarkController.js";

const router = express.Router();

router.get("/", index);
router.post("/", create);
router.delete("/:id", destroy);

export default router;
