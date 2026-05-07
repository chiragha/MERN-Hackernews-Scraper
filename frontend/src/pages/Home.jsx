import Navbar from "../components/Navbar";
import Hero from "../components/StoryCard";
import StoriesSection from "../components/StoriesSection";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <StoriesSection />
    </div>
  );
}

export default Home;