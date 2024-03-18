import React, { useState } from "react";
import Movie from "./Movie";
import { v4 as uuid } from "uuid";

const Movies = () => {
  const movies = [
    { id: 1, name: "Mad Max" },
    { id: 2, name: "Lord of the Rings" },
    { id: 3, name: "Batman Dark Knight" },
    { id: 4, name: "The Godfather" },
    { id: 5, name: "Deadpool" },
    { id: 6, name: "Avengers Endgame" },
    { id: 7, name: "The Matrix" },
    { id: 8, name: "Inception" },
    { id: 9, name: "The Shawshank Redemption" },
    { id: 10, name: "The Dark Knight" },
    { id: 11, name: "Pulp Fiction" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {movies.map((movie) => (
        <Movie key={uuid()} movie={movie}></Movie>
      ))}
    </div>
  );
};

export default Movies;
