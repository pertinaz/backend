import { Router } from "express";
import {
  personDetails,
  popularPeople,
} from "../controller/personController.js";

const peopleRouter = Router();

peopleRouter.get("/", (req, res) => {
  // root path of the server
  res.send("PORT HAS BEEN OPENED");
});

peopleRouter.get("/person/:id", personDetails);
peopleRouter.get("/popular/person", popularPeople);

export default peopleRouter;
