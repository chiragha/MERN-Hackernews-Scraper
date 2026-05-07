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
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

try {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("MongoDB Connected");

  // AUTO SCRAPER RUN
  await scrapeStories();

} catch (error) {
  console.log(error.message);
}

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