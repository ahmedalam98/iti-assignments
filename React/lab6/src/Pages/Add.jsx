import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: String(movies.length + 2),
      name: movieName,
    };

    dispatch(addMovie(newMovie));
    setMovieName("");
    navigate("/");
  };

  return (
    <>
      <h1>Add Movie</h1>

      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Movie Name</h2>

        <input type="text" value={movieName} onChange={handleInputChange} />

        <button className="add-btn" type="submit">
          ADD MOVIE
        </button>
      </form>
    </>
  );
};

export default AddMovie;
