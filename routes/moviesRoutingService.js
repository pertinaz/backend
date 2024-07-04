import { Router } from "express";
import { movieDetails, moviesList } from "../controller/moviesController.js";

const moviesRouter = Router();

moviesRouter.get("/", (req, res) => {
  // root path of the server
  res.send("PORT HAS BEEN OPENED");
});

moviesRouter.get("/movie/:id", movieDetails);
moviesRouter.get("/popular/movies", moviesList);

export default moviesRouter;
