import { Router } from "express";
import { trending } from "../controller/trendingController.js";

export const trendingRouter = Router();

trendingRouter.get(trending);
