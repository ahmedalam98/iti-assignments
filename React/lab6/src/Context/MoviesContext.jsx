import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MoviesContext = createContext();

export const useMovies = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const getAllMovies = () => {
    return movies;
  };

  const getMovieById = (id) => {
    return movies.find((movie) => movie.id === id);
  };

  const postNewMovie = async (newMovie) => {
    try {
      const lastMovie = movies[movies.length - 1];
      const newId = lastMovie ? Number(lastMovie.id) + 1 : 1;
      const idString = newId.toString();
      newMovie.id = idString;
      const response = await axios.post(
        "http://localhost:3000/movies",
        newMovie
      );
      setMovies([...movies, response.data]);
    } catch (error) {
      console.error("Error posting new movie:", error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/movies/${id}`);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{ getAllMovies, getMovieById, postNewMovie, deleteMovie }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
