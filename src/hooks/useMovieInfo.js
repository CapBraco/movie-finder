import { useState, useEffect } from "react";
import { getMovieInfo } from "../services/tmdb";

export const useMovieInfo = (movieId) =>{
    const [movieInfo, setMovieInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);

    useEffect(()=>{
        if(!movieId) return;

        const fetchMovieInfo = async () => {
            try{
                const response = await getMovieInfo(movieId);
                setMovieInfo(response);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        fetchMovieInfo();
    },[movieId]);
    return { movieInfo, loading, error};
};