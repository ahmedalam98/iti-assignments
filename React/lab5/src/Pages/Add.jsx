import { useState } from "react";
import { useMovies } from "../Context/MoviesContext";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const { postNewMovie } = useMovies();
  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      name: movieName,
    };
    postNewMovie(newMovie);
    setMovieName("");

    navigate("/");
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input type="text" value={movieName} onChange={handleInputChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMovie;
