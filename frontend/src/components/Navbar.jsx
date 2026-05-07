import { Link } from "react-router-dom";

import {
  Bookmark,
  Newspaper,
  LogIn,
  UserPlus,
} from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="rounded-xl bg-blue-600 p-2">
            <Newspaper size={22} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              HackerNews
            </h1>

            <p className="text-xs text-zinc-400">
              MERN Story Scraper
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-zinc-300 transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/stories"
            className="text-sm font-medium text-zinc-300 transition hover:text-blue-400"
          >
            Stories
          </Link>

          <Link
            to="/bookmarks"
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-blue-400"
          >
            <Bookmark size={18} />
            Bookmarks
          </Link>

        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-blue-500 hover:text-white"
          >
            <LogIn size={18} />
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            <UserPlus size={18} />
            Sign Up
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;