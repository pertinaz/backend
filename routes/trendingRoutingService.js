import { Router } from "express";
import { trending } from "../controller/trendingController.js";

const trendingRouter = Router();

trendingRouter.get("/", (req, res) => {
  // root path of the server
  res.send("PORT HAS BEEN OPENED");
});

trendingRouter.get("/trending", trending);

export default trendingRouter;
