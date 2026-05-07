import express from "express";
import Story from "../models/Story.js";

const router = express.Router();

router.get("/stories", async (req, res) => {
  try {
    const stories = await Story.find();

    res.status(200).json({
      success: true,
      stories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;