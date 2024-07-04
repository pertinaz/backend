import tmdbInstance from "../axiosInstance.js";

// Specific movie details
export const movieDetails =
  ("/movies/:id",
  async (req, res) => {
    try {
      const response = await tmdbInstance.get("/movies/:id");
      res.json(response.json());
    } catch (error) {
      res
        .status(503)
        .send("The API is undergoing maintenance. Try again later.");
    }
  });

//List of popular movies
export const moviesList =
  ("/movies",
  async (req, res) => {
    try {
      const response = await tmdbInstance.get("/movie/popular");
      res.json(response.data);
    } catch (error) {
      res
        .status(503)
        .send("The API is undergoing maintenance. Try again later.");
    }
  });
