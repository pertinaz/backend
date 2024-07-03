import express from "express";
import { USERS_DDBB } from "../ddbb.js";

const accountRouter = express.Router();

accountRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

// Obetener los detalles de una cuenta
accountRouter.get("/:guid", (req, res) => {
  const { guid } = req.params;
  const user = USERS_DDBB.find((user) => user.guid === guid);
  if (!user) return req.status(404).send();
  res.send(user);
});

// Crear una nueva cuenta
accountRouter.post("/", (req, res) => {
  const { guid, name } = req.body;

  if (!name || !guid) return res.state(400).send();
  const user = USERS_DDBB.find((user) => user.guid === guid);
  if (user) return res.status(409).send();

  USERS_DDBB.push({
    guid,
    name,
  });

  return res.send();
});

// Actualizar una cuenta
accountRouter.patch("/:guid", (req, res) => {
  const { guid } = req.params;
  const { name } = req.body;

  if (!name) return res.state(400).send();
  const user = USERS_DDBB.find((user) => user.guid === guid);
  if (!user) return res.status(404).send();

  user.name = name;

  return res.send();
});

// Eliminar una cuenta
accountRouter.delete("/:guid", (req, res) => {
  const { guid } = req.params;
  const userIndex = USERS_DDBB.findIndex((user) => user.guid === guid);
  if (userIndex === -1) return res.status(404).send();

  USERS_DDBB.splice(userIndex, 1);

  return res.send();
});

export default accountRouter;
