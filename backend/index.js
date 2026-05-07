import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import scrapeRoutes from "./routes/scrapeRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 4001;

app.use(express.json());

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");
} catch (error) {
  console.log(error.message);
}

app.get("/", (req, res) => {
  res.send("API Running");
});

// ROUTES
app.use("/api/v1", scrapeRoutes);
app.use("/api/v1", storyRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});