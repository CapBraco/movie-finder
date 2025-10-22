const FeaturedMovie = ({ randomMovie }) => {
  if (!randomMovie) return null;

  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
  const { title, backdrop_path, vote_average } = randomMovie;

  return (
    <div className="featured-movie">
      <img
        className="cover"
        src={
          backdrop_path
            ? `${posterBaseUrl}${backdrop_path}`
            : "https://via.placeholder.com/500x281?text=No+Image"
        }
        alt={title}
      />

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
            <i className="fa fa-share-square"></i> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
