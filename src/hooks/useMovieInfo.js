import { useState, useEffect } from "react";
import { getMovieInfo } from "../services/tmdb";

export const useMovieInfo = (movieId) => {
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setMovieInfo(null);
      return;
    }

    const fetchMovieInfo = async () => {
      try {
        const data = await getMovieInfo(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieInfo();
  }, [movieId]);

  return { movieInfo };
};
