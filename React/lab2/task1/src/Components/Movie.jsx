import React from "react";
import "./Movie.css";

class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <h3 className="movie-title">Movie {movie.id}</h3>
        <p className="movie-details">
          <span>Name:</span> {movie.title}
        </p>
      </div>
    );
  }
}

export default Movie;
