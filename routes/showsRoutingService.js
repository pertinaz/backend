import { Router } from "express";
import { showDetails, showsList } from "../controller/showsController";

const router = Router();

router.get("/", (req, res) => {
  // root path of the server
  res.send("PORT HAS BEEN OPENED");
});

router.get("/tv/:id", showDetails); // request a movie
router.get("/tv/popular", showsList); // request a range of movies
