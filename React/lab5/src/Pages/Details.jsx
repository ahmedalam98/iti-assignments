import React from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../Context/MoviesContext";

const Details = () => {
  const { getMovieById } = useMovies();
  const singleMovie = getMovieById(useParams().id);

  return (
    <div>
      <h1>Details Page</h1>
      <p>
        Movie ID: <span>{singleMovie.id}</span>
      </p>
      <p>
        Movie Name: <span>{singleMovie.name}</span>
      </p>
    </div>
  );
};

export default Details;
