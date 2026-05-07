import express from "express";
import Story from "../models/Story.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/stories", protect, (req, res) => {
  res.json({
    message: "Protected stories route",
  });
});

export default router;