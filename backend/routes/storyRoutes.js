import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getAllStories,
  getSingleStory,
  toggleBookmark,
  getBookmarks,
} from "../controllers/storyController.js";

const router = express.Router();

// GET ALL STORIES
router.get("/stories", getAllStories);

// GET SINGLE STORY
router.get("/stories/:id", getSingleStory);

// TOGGLE BOOKMARK
router.post(
  "/stories/:id/bookmark",
  protect,
  toggleBookmark
);

//get bookmarked
router.get(
  "/bookmarks",
  protect,
  getBookmarks
);

export default router;