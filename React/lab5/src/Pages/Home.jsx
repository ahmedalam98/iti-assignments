import React, { useEffect } from "react";
import { useMovies } from "../Context/MoviesContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { getAllMovies, deleteMovie } = useMovies();
  const movies = getAllMovies();

  return (
    <div>
      <h1>Movies</h1>

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr",
          columnGap: "20px",
          rowGap: "50px",
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ textAlign: "center" }}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
              <li>{movie.name}</li>
            </Link>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
