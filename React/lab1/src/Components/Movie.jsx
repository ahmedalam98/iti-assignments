import React from "react";
import "./Movie.css"; //

const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3 className="movie-title">Movie {movie.id}</h3>
      <p className="movie-details">
        <span>Name:</span> {movie.name}
      </p>
    </div>
  );
};

export default Movie;
