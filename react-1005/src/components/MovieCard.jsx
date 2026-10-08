import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  const formattedRating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Poster"
          }
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            ♥
          </button>
        </div>
        {/* Overlay */}
        <div className="movie-description-overlay">
          <h4>Overview</h4>
          <p>{movie.overview || "No description available."}</p>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-year">
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </span>
          <span className="movie-rating">⭐ {formattedRating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
