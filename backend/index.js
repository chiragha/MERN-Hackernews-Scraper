import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import scrapeStories from "./scraper/scraper.js";

import scrapeRoutes from "./routes/scrapeRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "https://mern-hackernews-scraper.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

const startServer = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await scrapeStories();

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

  } catch (error) {

    console.log(error.message);
  }
};

startServer();

app.get("/", (req, res) => {
  res.send("API Running");
});

// ROUTES
app.use("/api/v1", scrapeRoutes);

app.use("/api/v1", storyRoutes);

app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});