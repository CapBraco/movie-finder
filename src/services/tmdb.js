//Api key 
    const tmdbKey = 'de0f68dacc87c34adac8de33c84e277a';
    const tmdbUrl = 'https://api.themoviedb.org/3';

 export const getGenres = async () => {
        const genRequestEndPoint = '/genre/movie/list';
        const requestParams = `?api_key=${tmdbKey}`;
        const urlToFetch = `${tmdbUrl}${genRequestEndPoint}${requestParams}`;

        try{
            const response = await fetch(urlToFetch);
            if(response.ok){
                const jsonResponse = await response.json();
                const genres = jsonResponse.genres;
                return genres;
            }
        }catch(error){
            console.log(error);
        }
    }

export const getMoviesByGender = async (genreId) => {
    const movieRequestEndpoint = '/discover/movie';
    const requestParams = `?api_key=${tmdbKey}&with_genres=${genreId}`;
    const urlToFetch = `${tmdbUrl}${movieRequestEndpoint}${requestParams}`;

    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            return movies;
        }
    }catch(error){
        console.log(error)
    }
}

export const getMovieInfo = async (movieId) => {
    const movieInfoEndPoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbUrl}${movieInfoEndPoint}${requestParams}`;

    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    }catch(error){
        console.log(error);
    };
};

