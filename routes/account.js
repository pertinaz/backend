import express from "express";
import axios from "axios";
import tmdbInstance from "/axiosIntance.js";

const accountRouter = express.Router();

accountRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

// Obtener peliculas populares -> hacer una funcion asincrona y usar try/catch con await, dentro del try de la funcion crear una variable de tipo constante que se llame response que será igual al await del llamado de la instancia de axios y el verbo para despues especificar la ruta de donde obtendremos la informacion (query), despues en res.json(response.data) almacenamos la informacion recolectada. en caso de que haya un error, usar el catch para identificar el error y al res.status(codigo de error).send('anexamos el mensaje a mostrar en consola dependiendo del error')

accountRouter.get("/movies", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/popular/movies");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Unable to find the movies");
  }
});

// Obtener programas de TV populares
accountRouter.get("/shows", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/popular/tv");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error retriving TV shows");
  }
});

// Obtener personas populares
accountRouter.get("/people", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/popular/person");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error retriving people");
  }
});

export default accountRouter;
