import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function StoryCard({ story, onRemoveBookmark }) {
  const { user } = useAuth();

  const [isBookmarked, setIsBookmarked] = useState(
    story?.isBookmarked || false,
  );

  if (!story) return null;
  const handleBookmark = async () => {
    if (!user) {
      toast.error("Please login first to bookmark stories");

      return;
    }

    try {
      const { data } = await api.post(`/stories/${story._id}/bookmark`);
      setIsBookmarked(!isBookmarked);
      toast.success(data.message);
      if (onRemoveBookmark) {
        onRemoveBookmark(story._id);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
          {story.points || 0} points
        </span>

        <button
          onClick={handleBookmark}
          className={`transition ${
            isBookmarked
              ? "text-yellow-400"
              : "text-zinc-500 hover:text-yellow-400"
          }`}
        >
          <Bookmark size={20} />
        </button>
      </div>

      <h2 className="mb-4 text-xl font-semibold text-white">
        {story.title || "No title"}
      </h2>

      <div className="flex items-center justify-between text-sm text-zinc-400">
        <p>By {story.author || "Unknown"}</p>

        <p>{story.postedAt || "Recently"}</p>
      </div>
    </div>
  );
}

export default StoryCard;
