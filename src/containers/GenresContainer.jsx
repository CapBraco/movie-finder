import GenreSelector from "../components/GenreSelector";
import MovieList from "../components/MovieList";
import MovieInfo from "../components/MovieInfo";
import FeaturedMovie from "../components/FeaturedMovie";
import { useState, useEffect } from "react";
import { useGenres } from "../hooks/useGenres";
import { useMovies } from "../hooks/useMovies";
import { useMovieInfo } from "../hooks/useMovieInfo";
import { useRandomMovie } from "../hooks/useRandomMovie";

const GenresContainer = () => {
  const { categories } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

 // ⚡ Cargar un género por defecto al iniciar
  useEffect(() => {
    if (categories && categories.length > 0 && !selectedGenre) {
      // puedes cambiar el índice o el nombre del género que prefieras
      setSelectedGenre(categories[0].id); 
    }
  }, [categories, selectedGenre]);


  const { movies, loading } = useMovies(selectedGenre);
  const { movieInfo } = useMovieInfo(selectedMovie);
  const { movie: randomMovie } = useRandomMovie(selectedGenre);

  return (
    <div className="window">
      <FeaturedMovie randomMovie={randomMovie} />

      <GenreSelector 
        categories={categories}
        className="active"
        onSelect={(id) => setSelectedGenre(id)}
      />

      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <MovieList
          movies={movies}
          onSelect={(id) => setSelectedMovie(id)}
          categories={categories}
        />
      )}

      <MovieInfo
        movieInfo={movieInfo}
        onClose={() => setSelectedMovie(null)} // Esto cierra el modal al hacer click fuera
        />
    </div>
  );
};

export default GenresContainer;
