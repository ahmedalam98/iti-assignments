import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get("http://localhost:3000/movies");
  return response.data;
});

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (id) => {
    const response = await axios.get(`http://localhost:3000/movies/${id}`);
    return response.data;
  }
);

export const addMovie = createAsyncThunk("movies/addMovie", async (movie) => {
  const response = await axios.post("http://localhost:3000/movies", movie);
  return response.data;
});

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id, { getState }) => {
    // Delete movie from movies list
    const deleteMovieResponse = await axios.delete(
      `http://localhost:3000/movies/${id}`
    );

    // Delete movie from favorites list if it exists
    const state = getState();
    const isFavorite = state.movies.favourites.some((movie) => movie.id === id);
    if (isFavorite) {
      await axios.delete(`http://localhost:3000/favourites/${id}`);
    }

    return deleteMovieResponse.data;
  }
);

// ---------------------------------------------------------------- //

export const fetchFavourites = createAsyncThunk(
  "movies/fetchFavourites",
  async () => {
    const response = await axios.get("http://localhost:3000/favourites");
    return response.data;
  }
);

export const addFavouriteMovie = createAsyncThunk(
  "movies/addFavouriteMovie",
  async (movie) => {
    const response = await axios.post(
      "http://localhost:3000/favourites",
      movie
    );
    return response.data;
  }
);

export const removeFavouriteMovie = createAsyncThunk(
  "movies/removeFavouriteMovie",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/favourites/${id}`
    );
    return response.data;
  }
);

// ---------------------------------------------------------------- //

const initialState = {
  movies: [],
  favourites: [],
  favouriteCount: 0,
  // Async Thunk status
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    });

    builder.addCase(fetchFavourites.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.favourites = action.payload;
      state.favouriteCount = action.payload.length;
    });

    builder.addCase(addMovie.fulfilled, (state, action) => {
      state.movies.push(action.payload);
    });

    builder.addCase(deleteMovie.fulfilled, (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    });

    builder.addCase(addFavouriteMovie.fulfilled, (state, action) => {
      state.favourites.push(action.payload);
      // state.favouriteCount = action.payload.length;
      state.favouriteCount = state.favourites.length;
    });

    builder.addCase(removeFavouriteMovie.fulfilled, (state, action) => {
      state.favourites = state.favourites.filter(
        (movie) => movie.id !== action.payload
      );
      state.favouriteCount = state.favourites.length;
    });
  },
});

export default moviesSlice.reducer;
