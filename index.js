import express from "express";
import dotenv from "dotenv";
import accountRouter from "./routes/account.js";

// MIDDLEWARE AND ROUTER

// Configuración inicial del proyecto con dotenv
dotenv.config(); // importa lo que tenga en las variables de entorno

const PORT = process.env.PORT || 3000;
const expressApp = express();

expressApp.use(express.json());
expressApp.use("/account", accountRouter);

expressApp.get("/raiz",(req,res) => {
    res.send();
});

// Rutas de prueba
expressApp.listen(PORT, () =>
  console.log(`Servidor montado en el puerto ${PORT}`)
);

//VARIABLES DE ENTORNO  dirigirse a .env


// POSTMAN: Nos ayuda a organizar nuestras API, crear y organizar nuestros Endpoints y compartirlos con nuestro equipo o quien quieramos
