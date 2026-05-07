import axios from "axios";
import * as cheerio from "cheerio";

import Story from "../models/Story.js";

const scrapeStories = async () => {
  try {

    // Remove old stories
    await Story.deleteMany();

    // Fetch Hacker News HTML
    const { data } = await axios.get(
      "https://news.ycombinator.com"
    );

    const $ = cheerio.load(data);

    const stories = [];

    $(".athing").each((i, el) => {

      if (i < 10) {
        const title = $(el)
          .find(".titleline a")
          .text();

        const url = $(el)
          .find(".titleline a")
          .attr("href");

        const subtext = $(el)
          .next()
          .find(".subtext");

        const points =
          parseInt(
            subtext.find(".score").text()
          ) || 0;

        const author =
          subtext.find(".hnuser").text();

        const postedAt =
          subtext.find(".age").text();

        stories.push({
          title,
          url,
          points,
          author,
          postedAt,
        });
      }
    });

    await Story.insertMany(stories);

    console.log("Top 10 stories scraped");

  } catch (error) {

    console.log(error);
  }
};

export default scrapeStories;