import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Autorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
});

export default tmdbInstance;
