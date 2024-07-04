import tmdbInstance from "./axiosInstance";
import express from "express";

const showsRouter = express.Router();

// Specific movie details
movieRouter.get("/tv/:id", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/tv/:id");
    res.json(response.json());
  } catch (error) {
    res.status(503).send("The API is undergoing maintenance. Try again later.");
  }
});

//List of popular movies
movieRouter.get("/tv", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/tv/popular");
    res.json(response.data);
  } catch (error) {
    res.status(503).send("The API is undergoing maintenance. Try again later.");
  }
});

export default showsRouter;
