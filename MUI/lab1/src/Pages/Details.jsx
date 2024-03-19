import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovieById } from "../moviesSlice";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

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
  }, [dispatch, id]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Details Page
      </Typography>

      <Typography variant="h6" gutterBottom>
        Movie ID:{" "}
        <Typography variant="h6" component="span" color="warning">
          {movie.id}
        </Typography>
      </Typography>

      <Typography variant="h6" gutterBottom>
        Movie Name:{" "}
        <Typography variant="h6" component="span" color="warning">
          {movie.name}
        </Typography>
      </Typography>
    </div>
  );
};

export default Details;
