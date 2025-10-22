import { useMovieTrailer } from "../hooks/useMovieTrailer";

const FeaturedMovie = ({ randomMovie }) => {
  // ⚡ Siempre llamamos el hook, incluso si randomMovie es null
  const movieId = randomMovie?.id;
  const { videos } = useMovieTrailer(movieId);

  if (!randomMovie) return null;

  const { title, backdrop_path, vote_average } = randomMovie;
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

  const trailer = videos?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  return (
    <div className="featured-movie">
      {/* 🎥 Mostrar trailer si existe */}
      {trailer ? (
        <iframe
          width="100%"
          className="iframe-featured"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}`}
          title={title}
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
          
        ></iframe>
      ) : (
        <img
          className="cover"
          src={
            backdrop_path
              ? `${posterBaseUrl}${backdrop_path}`
              : "https://via.placeholder.com/500x281?text=No+Image"
          }
          alt={title}
        />
      )}

      <p className="corner-title">Staff pick</p>

      <div className="bottom-bar">
        <div className="title-container">
          <span className="fa fa-play-circle"></span>
          <b>{title}</b> - Trailer
        </div>

        <div className="right">
          <div className="stars">
            {"★".repeat(Math.round(vote_average / 2))}
            {"☆".repeat(5 - Math.round(vote_average / 2))}
          </div>
          <div className="share">
            {Math.round(randomMovie.vote_average)}/10
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
