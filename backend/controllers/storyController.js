import User from "../models/User.js";

export const toggleBookmark = async (req, res) => {
  const user = await User.findById(req.user._id);

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

  res.json({
    message: "Bookmark updated",
    bookmarks: user.bookmarks,
  });
};