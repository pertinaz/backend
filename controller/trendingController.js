import tmdbInstance from "../axiosInstance.js";

const type = ["/movie", "/tv", "person"];

export const trending =
  ("/trending",
  async (req, res) => {
    try {
      const response = await tmdbInstance.get(`/trending/${type[2]}/day`);
      res.json(response.data);
    } catch (error) {
      res.status(503).send("Error: " + error);
    }
  });
