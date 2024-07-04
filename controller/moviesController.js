import tmdbInstance from "../axiosInstance.js";

// Specific movie details
export const movieDetails =
  ("/movies/:id",
  async (req, res) => {
    const { id = "" } = req.query;
    try {
      const response = await tmdbInstance.get("/movie/:id", {
        params: {
          id,
        },
      });
      res.json(response.json());
    } catch (error) {
        error.statusCode = 503;
        error.message = "The API is undergoing maintenance. Try again later.";
        next(error); // Pasar el error al middleware de manejo de errores
    }
  });

//List of popular movies
export const moviesList =
  ("/movies",
  async (req, res) => {
    const {
      id,
      page = 1,
      region = "us-east-1",
      language = "en-US", // ISO 639-1
      query,
      genre,
    } = req.query;
    try {
      const response = await tmdbInstance.get("/movie/popular", {
        params: {
          id,
          page,
          region,
          language,
          query,
          genre,
        },
      });
      res.json(response.data);
    } catch (error) {
        error.statusCode = 503;
        error.message = "The API is undergoing maintenance. Try again later.";
        next(error); // Pasar el error al middleware de manejo de errores
    }
  });
