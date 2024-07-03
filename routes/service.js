import express from "express";
import tmdbInstance from "./axiosInstance.js";

const accountRouter = express.Router();

// Obtener peliculas populares
accountRouter.get("/movies", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/movie/popular");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error finding the movies");
  }
});

// Obtener programas de TV populares
accountRouter.get("/shows", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/tv/popular");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error retriving TV shows");
  }
});

// Obtener personas populares
accountRouter.get("/people", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/person/popular");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error retriving people");
  }
});

export default accountRouter;
