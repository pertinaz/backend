import tmdbInstance from "./axiosInstance";

// Specific person details
export const personDetails =
  ("/person/:id",
  async (req, res) => {
    try {
      const response = await tmdbInstance.get("/person/:id");
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
    try {
      const response = await tmdbInstance.get("/person/popular");
      res.json(response.data);
    } catch (error) {
      res
        .status(503)
        .send("The API is undergoing maintenance. Try again later.");
    }
  });
