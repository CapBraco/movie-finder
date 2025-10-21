import { useEffect, useState } from "react";
import { getMoviesByGender } from "../services/tmdb";

export const useMovies = (genreId) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!genreId) return;

        const fetchMovies = async () => {
            try{
                const response = await getMoviesByGender(genreId)
                setMovies(response);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        };
        fetchMovies();
    }, [genreId]);

    return { movies, loading, error }
}