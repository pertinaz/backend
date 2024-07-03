import express from "express";
import tmdbInstance from "/axiosIntance.js";

const accountRouter = express.Router();

accountRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

// Obtener peliculas populares
accountRouter.get("/movies", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/popular/movies");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error finding the movies");
  }
});

// Obtener programas de TV populares
accountRouter.get("/shows", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/popular/tv");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error retriving TV shows");
  }
});

// Obtener personas populares
accountRouter.get("/people", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/popular/person");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error retriving people");
  }
});

export default accountRouter;
