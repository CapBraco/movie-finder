const MovieInfo = ( {movieInfo} ) => {
    const posterBaseUrl = 'https://image.tmdb.org/t/p/w200'
    if(!movieInfo) return null;

    return(
        <>
        <div className="movie-info">
            <h2>{movieInfo.title}</h2>
            <img src={`${posterBaseUrl}${movieInfo.poster_path}`} alt={movieInfo.title}/>
            <h5>Original Title: "{movieInfo.original_title}"</h5>
            <h5>Overview</h5>
            <p>{movieInfo.overview}</p>
            <p>
                {movieInfo.genres?.map((g) => g.name).join(", ")}
            </p>
        </div>
        </>
    )
}

export default MovieInfo;