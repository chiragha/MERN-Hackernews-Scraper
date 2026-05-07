import { useEffect, useState } from "react";

import StoryCard from "./StoryCard";

import { getStories } from "../services/storyService";

function StoriesSection() {

  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchStories = async () => {

      try {

        const data = await getStories();

        setStories(data.stories);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

    fetchStories();

  }, []);

  if (loading) {
    return (
      <h1 className="p-10 text-center text-white">
        Loading stories...
      </h1>
    );
  }

  return (
    <section className="bg-zinc-950 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            Trending Stories
          </h2>

          <p className="text-zinc-400">
            {stories.length} stories
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {stories.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default StoriesSection;