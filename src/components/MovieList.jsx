const MovieList = ( { movies, onSelect, categories } ) => {
    const posterBaseUrl = 'https://image.tmdb.org/t/p/w200'
    
    const getGenreNames = (genresIds = []) => {
        return genresIds.map(id => categories.find(cat => cat.id === id)?.name).filter(Boolean).join(", ");
    }
    
    return (
        <>
        <div className="movie-list">
            <ul className="list">
                {movies.map((movie)=>(
                    <li 
                    key={movie.id}
                    value={movie.id}
                    onClick={() => onSelect(movie.id)}
                    >
                        <img src={`${posterBaseUrl}${movie.poster_path}`} alt={movie.title} className="cover" />
                        <p className="title">{movie.title}</p>
                        <p className="genre">{getGenreNames(movie.genre_ids)}</p>
                        <p className='date'>Released: {movie.release_date}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default MovieList;