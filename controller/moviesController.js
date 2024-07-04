import tmdbInstance from './axiosInstance';
import express from 'express';

const movieRouter = express.Router();

// Specific movie details
movieRouter.get('/movies/:id', async (req,res) => {
    try{
        const response = await tmdbInstance.get('/movies/:id');
        res.json(response.json());
    }catch(error){ res.status(503).send("The API is undergoing maintenance. Try again later.");}
});

//List of popular movies
movieRouter.get("/movies", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/movie/popular");
    res.json(response.data);
  } catch (error) {
    res.status(503).send("The API is undergoing maintenance. Try again later.");
  }
});

export default movieRouter;