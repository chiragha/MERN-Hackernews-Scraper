import express from "express";
import scrapeStories from "../scraper/scraper.js";

const router = express.Router();

router.post("/scrape", async (req, res) => {
  try {

    await scrapeStories();

    res.status(200).json({
      success: true,
      message: "Scraped successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;