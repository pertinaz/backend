import axios from "axios";
import dotenv from "dotenv";
const key = process.env.TMDB_API_KEY;
dotenv.config();
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Autorization: `Bearer ${key}`,
  },
});

export default tmdbInstance;
