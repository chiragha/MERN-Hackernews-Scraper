import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        
        <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
          Real-Time HackerNews Scraper
        </div>

       
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Discover Trending
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Tech Stories
          </span>
          <br />
          Across The Developer World
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Explore real-time scraped stories from the developer ecosystem. Read
          trending discussions on React, Node.js, AI, startups, backend systems,
          and scalable engineering.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">
            Explore Stories
            <ArrowRight size={18} />
          </button>

          <button className="rounded-2xl border border-zinc-700 px-6 py-3 font-medium text-zinc-300 transition hover:border-blue-500 hover:text-white">
            View Bookmarks
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-3xl font-bold text-white">10K+</h2>
            <p className="mt-2 text-zinc-400">Stories Scraped</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">5K+</h2>
            <p className="mt-2 text-zinc-400">Developers</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">99%</h2>
            <p className="mt-2 text-zinc-400">API Reliability</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">24/7</h2>
            <p className="mt-2 text-zinc-400">Live Updates</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
