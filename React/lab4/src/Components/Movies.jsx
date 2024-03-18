import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { v4 as uuid } from "uuid";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {movies.map((movie) => (
        <Movie key={uuid()} movie={movie}></Movie>
      ))}
    </div>
  );
}

export default Movies;
