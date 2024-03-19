import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField, Button, Typography } from "@mui/material";

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
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: "45vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Movie
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Movie Name"
            color="secondary"
            fullWidth
            value={movieName}
            onChange={handleInputChange}
            margin="normal"
            InputProps={{
              style: { color: "#fff" },
              classes: {
                root: "white-outline",
                focused: "white-outline-focused",
                notchedOutline: "white-notched-outline",
              },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            size="large"
          >
            Add Movie
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddMovie;
