import { Router } from "express";
import { showDetails, showsList } from "../controller/showsController.js";

const showsRouter = Router();

showsRouter.get("/", (req, res) => {
  // root path of the server
  res.send("PORT HAS BEEN OPENED");
});

showsRouter.get("/tv/:id", showDetails); // request a movie
showsRouter.get("/tv/popular", showsList); // request a range of movies

export default showsRouter;