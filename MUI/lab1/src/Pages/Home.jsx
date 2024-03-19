import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  fetchFavourites,
  deleteMovie,
  addFavouriteMovie,
  removeFavouriteMovie,
} from "../moviesSlice";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  const favourites = useSelector((state) => state.movies.favourites);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchFavourites());
  }, [dispatch]);

  const handleDeleteMovie = (id) => {
    dispatch(deleteMovie(id))
      .then(() => {
        dispatch(fetchMovies());
      })
      .then(() => {
        dispatch(fetchFavourites());
      })
      .catch((error) => {
        console.error("Error deleting movie:", error);
      });
  };

  const isMovieInFavourites = (id) => {
    return favourites.some((fav) => fav.id === id);
  };

  const toggleFavourite = (movie) => {
    if (isMovieInFavourites(movie.id)) {
      dispatch(removeFavouriteMovie(movie.id))
        .then(() => {
          dispatch(fetchFavourites());
        })
        .catch((error) => {
          console.error("Error removing movie from favourites:", error);
        });
    } else {
      dispatch(addFavouriteMovie(movie));
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Typography variant="h4" component="h4" mb={3}>
        Server Movies :
      </Typography>

      <Grid container spacing={2}>
        {movies &&
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Card variant="outlined">
                <CardContent>
                  <Link
                    to={`/movie/${movie.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="h6" component="h6">
                      {movie.name}
                    </Typography>
                  </Link>
                </CardContent>

                <CardActions>
                  <ButtonGroup>
                    {isMovieInFavourites(movie.id) ? (
                      <Button
                        variant="text"
                        onClick={() => toggleFavourite(movie)}
                      >
                        <StarIcon fontSize="large" color="secondary" />
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        onClick={() => toggleFavourite(movie)}
                      >
                        <StarOutlineIcon fontSize="large" color="secondary" />
                      </Button>
                    )}

                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDeleteMovie(movie.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
