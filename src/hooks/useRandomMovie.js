import { useState, useEffect } from "react";
import { getMoviesByGender, getRandomMovie } from "../services/tmdb";

export const useRandomMovie = (genre) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!genre) return;

    const fetchMovie = async () => {
      try {
        const moviesByGenre = await getMoviesByGender(genre); // lista
        const randomMovie = getRandomMovie(moviesByGenre); // una película
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [genre]);

  return { movie };
};
