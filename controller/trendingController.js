import tmdbInstance from "../axiosInstance.js";

const type = ["/movie", "/tv", "person"];

export const trending =
  ("/trending",
  async (req, res) => {
    const { type = "", time_window = "day" } = req.query;
    try {
      const response = await tmdbInstance.get(`/trending/${type}/day`, {
        params: {
          type,
          time_window,
        },
      });
      res.json(response.data);
    } catch (error) {
      error.statusCode = 503;
      error.message = "The API is undergoing maintenance. Try again later.";
      next(error); // Pasar el error al middleware de manejo de errores
    }
  });
