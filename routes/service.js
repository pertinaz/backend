import express from "express";
import tmdbInstance from "./axiosInstance.js";

// Obtener personas populares
accountRouter.get("/people", async (req, res) => {
  try {
    const response = await tmdbInstance.get("/person/popular");
    res.json(response.data);
  } catch (error) {
    res.status(503).send("The API is undergoing maintenance. Try again later."); // other https status of the 500 server errors
  }
});

export default accountRouter;
