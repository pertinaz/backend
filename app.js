import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import moviesRouter from "./routes/moviesRoutingService.js";
import showsRouter from "./routes/showsRoutingService.js";
import peopleRouter from "./routes/peopleRoutingService.js";
import trendingRouter from "./routes/trendingRoutingService.js";
import loggerMiddleware from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import logger from "./middlewares/logger.js";

// MIDDLEWARE AND ROUTER

// Configuración inicial del proyecto con dotenv

dotenv.config(); // importa lo que tenga en las variables de entorno

const PORT = process.env.PORT || 3000;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(loggerMiddleware);
// Usar morgan para registrar todas las solicitudes HTTP
app.use(
  morgan("combined", {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);

expressApp.use(moviesRouter);
expressApp.use(showsRouter);
expressApp.use(peopleRouter);
expressApp.use(trendingRouter);

expressApp.use(errorHandler);

// SERVIDOR EN EL PUERTO 3000
expressApp.listen(PORT, () =>
  console.log(`Servidor montado en el puerto ${PORT}`)
);

export default expressApp;

// POSTMAN: Usado para probar y organizar nuestros API endpoints
