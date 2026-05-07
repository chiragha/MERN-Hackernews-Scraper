import User from "../models/User.js";
import Story from "../models/Story.js";


// GET ALL STORIES
export const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({
      points: -1,
    });

    res.status(200).json({
      success: true,
      count: stories.length,
      stories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE STORY 
export const getSingleStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    if (!story) {
      return res.status(404).json({
        success: false,
        message: "Story not found",
      });
    }

    res.status(200).json({
      success: true,
      story,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// TOGGLE BOOKMARK
export const toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    const storyId = req.params.id;

    const alreadyBookmarked =
      user.bookmarks.includes(storyId);

    if (alreadyBookmarked) {
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== storyId
      );
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: alreadyBookmarked
        ? "Bookmark removed"
        : "Bookmark added",
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllStories = async (req, res) => {
  try {

    const stories = await Story.find()
      .sort({ points: -1 });

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
};