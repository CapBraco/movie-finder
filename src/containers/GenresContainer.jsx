import GenreSelector  from "../components/GenreSelector";
import MovieList from "../components/MovieList";
import MovieInfo from "../components/MovieInfo";
import { useState } from "react";
import { useGenres } from "../hooks/useGenres";
import { useMovies } from "../hooks/useMovies";
import { useMovieInfo } from "../hooks/useMovieInfo";

const GenresContainer  = () => {
    const {categories} = useGenres();
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const {movies, loading} = useMovies(selectedGenre);
    const {movieInfo} = useMovieInfo(selectedMovie)
    
    return(
        <>
        <div className="window">
                <GenreSelector  
                categories={categories}
                onSelect={(id) => setSelectedGenre(id)}
                />
                {loading ? <p>Loading movies...</p> : <MovieList movies={movies} onSelect={(id)=>setSelectedMovie(id)} categories={categories}/>}
                {loading ? <p>Loading Movie...</p> :<MovieInfo movieInfo={movieInfo}/>}    
        </div>
        </>
    );
}

export default GenresContainer;
