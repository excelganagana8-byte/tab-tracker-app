import express from "express";
import {
  index,
  create,
  destroy,
  deleteAll, // 👈 import the new controller function
} from "../controllers/HistoryController.js";

const router = express.Router();

router.get("/", index); // get user history
router.post("/", create); // add song to history
router.delete("/:id", destroy); // delete single history
router.delete("/", deleteAll); // 👈 delete all (no .deleteAll(), just normal route)

export default router;
