import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import api from "../api/axios";

import StoryCard from "../components/StoryCard";

function Bookmarks() {

  const [bookmarks, setBookmarks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchBookmarks = async () => {

      try {

        const { data } = await api.get(
          "/bookmarks"
        );

        setBookmarks(data.bookmarks);

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to fetch bookmarks"
        );

      } finally {

        setLoading(false);
      }
    };

    fetchBookmarks();

  }, []);

  if (loading) {
    return (
      <h1 className="p-10 text-center text-white">
        Loading bookmarks...
      </h1>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-950 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-10 text-3xl font-bold text-white">
          Your Bookmarks
        </h1>

        {bookmarks.length === 0 ? (

          <p className="text-zinc-400">
            No bookmarks yet
          </p>

        ) : (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {bookmarks.map((story) => (
              <StoryCard
                key={story._id}
                story={story}
              />
            ))}

          </div>
        )}

      </div>

    </section>
  );
}

export default Bookmarks;