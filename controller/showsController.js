import tmdbInstance from "../axiosInstance.js";
// Specific movie details
export const showDetails =
  ("/tv/:id",
  async (req, res) => {
    const { id = "" } = req.query;
    try {
      const response = await tmdbInstance.get("/tv/:id", {
        params: {
          id,
        },
      });
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
    const {
      id,
      page = 1,
      region = "us-east-1",
      language = "en-US", // ISO 639-1
      query,
      genre,
    } = req.query;
    try {
      const response = await tmdbInstance.get("/tv/popular", {
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
      res
        .status(503)
        .send("The API is undergoing maintenance. Try again later.");
    }
  });
