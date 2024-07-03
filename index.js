import express from "express";
import dotenv from "dotenv";
import accountRouter from "./routes/service.js";

// MIDDLEWARE AND ROUTER

// Configuración inicial del proyecto con dotenv
dotenv.config(); // importa lo que tenga en las variables de entorno

const PORT = process.env.PORT || 3000;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(accountRouter);

// SERVIDOR EN EL PUERTO 3000
expressApp.listen(PORT, () =>
  console.log(`Servidor montado en el puerto ${PORT}`)
);

//VARIABLES DE ENTORNO  dirigirse a .env

// POSTMAN: Usado para probar y organizar nuestros API endpoints
