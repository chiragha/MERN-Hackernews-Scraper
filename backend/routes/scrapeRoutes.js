import express from "express";
import scrapeStories from "../scraper/scraper.js";

const router = express.Router();

router.post("/scrape", async (req, res) => {
  await scrapeStories();
  res.json({ message: "Scraped successfully" });
});

export default router;