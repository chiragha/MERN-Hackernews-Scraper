import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
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