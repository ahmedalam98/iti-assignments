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
      // When you remove a movie from favorites, the removeFavouriteMovie action is dispatched,
      // and it asynchronously removes the movie from the favorites list in the Redux state.
      // Since this operation requires interaction with an external source(the API),
      //it's necessary to dispatch the fetchFavourites action after the removal is complete to update the Redux state with the latest list of favorites.
      dispatch(removeFavouriteMovie(movie.id))
        .then(() => {
          dispatch(fetchFavourites());
        })
        .catch((error) => {
          console.error("Error removing movie from favourites:", error);
        });
    } else {
      // the addFavouriteMovie.fulfilled case in the extraReducers section of the moviesSlice reducer is responsible for updating the favorites list in the Redux state.
      // It appends the new favorite movie to the state.favourites array.
      // Since the Redux state is updated synchronously within the same action, the component re-renders automatically with the updated favorites list, reflecting the addition of the new movie.
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
    <div className="home-container">
      <h1>Server Movies :</h1>

      <ul className="movie-list">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-name">
                <Link to={`/movie/${movie.id}`} className="movie-link">
                  <li>{movie.name}</li>
                </Link>
              </div>

              <div className="btns-container">
                {isMovieInFavourites(movie.id) ? (
                  <button
                    class="icon-btn"
                    onClick={() => toggleFavourite(movie)}
                  >
                    <i class="fa-solid fa-star fa-2xl gold-star"></i>
                  </button>
                ) : (
                  <button
                    class="icon-btn"
                    onClick={() => toggleFavourite(movie)}
                  >
                    <i class="fa-regular fa-star fa-2xl gold-star"></i>
                  </button>
                )}

                <button
                  className="movie-button delete-button"
                  onClick={() => handleDeleteMovie(movie.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Home;
