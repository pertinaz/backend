import axios from "axios";
require("dotenv").config();

const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Autorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
});

module.exports = tmdbInstance;
