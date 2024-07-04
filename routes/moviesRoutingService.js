import { Router } from "express";
import { movieDetails, moviesList } from "../controller/movieController";

const router = Router();

router.get("/", (req, res) => {
  // root path of the server
  res.send("PORT HAS BEEN OPENED");
});

router.get("/movie/:id", movieDetails);
router.get("/popular/movies", movieList);
