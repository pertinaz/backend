import axios from "axios";
import dotenv from "dotenv";
const key = process.env.TMDB_API_KEY;
dotenv.config();
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Autorization: `Bearer ${key}`,
  },
  params: {
    id: 1,
    page: 1,
    region: "us-east-1",
    language: "en-US", // ISO 639-1
    query: "SELECT * FROM",
    genre: "Any",
  },
});

export default tmdbInstance;
