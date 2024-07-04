import { Router } from "express";
import { personDetails, popularPeople } from "../controller/personController";

const router = Router();

router.get("/", (req, res) => {
  // root path of the server
  res.send("PORT HAS BEEN OPENED");
});

router.get("/person/:id", personDetails);
router.get("/popular/person", popularPeople);
