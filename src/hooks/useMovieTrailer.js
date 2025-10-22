// hooks/useMovieTrailer.js
import { useState, useEffect } from "react";
import { getMovieTrailer } from "../services/tmdb";

export const useMovieTrailer = (movieId) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailer = async () => {
      try {
        const data = await getMovieTrailer(movieId);
        setVideos(data.results || []);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return { videos };
};
