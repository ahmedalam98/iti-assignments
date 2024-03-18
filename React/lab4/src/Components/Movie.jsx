import React from "react";
import "./Movie.css";

function Movie({ movie }) {
  return (
    <div className="movie-card">
      <h3 className="movie-title">Movie {movie.id}</h3>
      <p className="movie-details">
        <span>Name:</span> {movie.title}
      </p>
    </div>
  );
}

export default Movie;
