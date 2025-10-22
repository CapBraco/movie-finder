const MovieTrailer = ({ videos }) => {
  if (!videos || videos.length === 0) return console.log('still nothing here');

  const youtubeTrailers = videos.filter(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  const youtubeUrl = "https://www.youtube.com/embed/";

  return (
    <div>
      {youtubeTrailers.map((video) => (
        <div key={video.id}>
          <h3>{video.name}</h3>
          <iframe
            width="100%"
            height="350"
            src={`${youtubeUrl}${video.key}?autoplay=1&mute=1`}
            title={video.name}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default MovieTrailer;
