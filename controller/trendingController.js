import tmdbInstance from "../axiosInstance.js";

export const trending =
  ("/trending",
  async (req, res) => {
    try {
      const response = await tmdbInstance.get(`/trending/${type}`);
      res.json(response.data);
    } catch (error) {
      res.status(503).send("Error: " + error);
    }
  });
