import React, { Children } from "react";

const MovieInfo = ({ movieInfo, onClose, children }) => {
  if (!movieInfo) return null;

  const posterBaseUrl = "https://image.tmdb.org/t/p/w200";

  const handleContainerClick = (e) => e.stopPropagation();

  return (
    <div className="movie-info-overlay" onClick={onClose}>
      <div className="movie-info" onClick={handleContainerClick}>
        <div>
        <h2 className="movie-info-title">{movieInfo.title}</h2>
        </div>
        <div className="movie-info-media">
            <div className="movie-info-media-img">
                <img src={`${posterBaseUrl}${movieInfo.poster_path}`} alt={movieInfo.title} />
            </div>
            <div className="movie-info-media-text">
                <h5>Original Title: "{movieInfo.original_title}"</h5>
                <h5>Overview</h5>
                <p>{movieInfo.overview}</p>
                <p>Average: {Math.round(movieInfo.vote_average)}/10</p>
            </div>
        </div>
        <div className="movie-info-genres">
            <p>{movieInfo.genres?.map((g) => g.name).join(", ")}</p>
        </div>
        <div className="media-trailer">
            {children}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
