import tmdbInstance from "../axiosInstance.js";

// Specific person details
export const personDetails =
  ("/person/:id",
  async (req, res) => {
    const { id = "" } = req.query;
    try {
      const response = await tmdbInstance.get("/person/:id", {
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

//List of popular people
export const popularPeople =
  ("/person",
  async (req, res) => {
    const { page = 1, adult, language = "en-US", query = "" } = req.query; // default parameters
    try {
      const response = await tmdbInstance.get("/person/popular", {
        params: {
          page,
          adult: true,
          language, // ISO 639-1
          query,
        },
      });
      res.json(response.data);
    } catch (error) {
      res
        .status(503)
        .send("The API is undergoing maintenance. Try again later.");
    }
  });
