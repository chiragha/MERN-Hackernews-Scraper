import { Bookmark } from "lucide-react";

function StoryCard({ story }) {

  if (!story) return null;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500">
      
      <div className="mb-4 flex items-center justify-between">

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
          {story.points || 0} points
        </span>

        <button className="text-zinc-500 hover:text-yellow-400">
          <Bookmark size={20} />
        </button>

      </div>

      <h2 className="mb-4 text-xl font-semibold text-white">
        {story.title || "No title"}
      </h2>

      <div className="flex items-center justify-between text-sm text-zinc-400">

        <p>
          By {story.author || "Unknown"}
        </p>

        <p>
          {story.time || "Recently"}
        </p>

      </div>

    </div>
  );
}

export default StoryCard;