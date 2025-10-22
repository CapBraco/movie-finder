import GenreSelector from "../components/GenreSelector";
import MovieList from "../components/MovieList";
import MovieInfo from "../components/MovieInfo";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieTrailer from "../components/MovieTrailer";
import { useState, useEffect } from "react";
import { useGenres } from "../hooks/useGenres";
import { useMovies } from "../hooks/useMovies";
import { useMovieInfo } from "../hooks/useMovieInfo";
import { useRandomMovie } from "../hooks/useRandomMovie";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

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
  const { videos } = useMovieTrailer(selectedMovie);

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
        onClose={() => setSelectedMovie(null)}>
        {selectedMovie && videos.length > 0 && (<MovieTrailer videos={videos} />)}
        </MovieInfo>
      
    </div>
  );
};

export default GenresContainer;
