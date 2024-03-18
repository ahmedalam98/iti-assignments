import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovieById } from "../moviesSlice";

const Details = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieById(id))
      .then((response) => {
        setMovie(response.payload);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  });

  return (
    <div>
      <h1>Details Page</h1>

      <h3>
        Movie ID: <span>{movie.id}</span>
      </h3>

      <h3>
        Movie Name: <span>{movie.name}</span>
      </h3>
    </div>
  );
};

export default Details;
