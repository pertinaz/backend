import tmdbInstance from "../axiosInstance.js";
// Specific movie details
export const showDetails =
  ("/tv/:id",
  async (req, res) => {
    try {
      const response = await tmdbInstance.get("/tv/:id");
      res.json(response.json());
    } catch (error) {
      res
        .status(503)
        .send("The API is undergoing maintenance. Try again later.");
    }
  });

//List of popular movies
export const showsList =
  ("/tv",
  async (req, res) => {
    try {
      const response = await tmdbInstance.get("/tv/popular");
      res.json(response.data);
    } catch (error) {
      res
        .status(503)
        .send("The API is undergoing maintenance. Try again later.");
    }
  });
