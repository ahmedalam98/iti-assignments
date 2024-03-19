import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFavourites, removeFavouriteMovie } from "../moviesSlice";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Favourites = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.movies.favouriteCount);
  const favourites = useSelector((state) => state.movies.favourites);

  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Your Favorite Movies = {count}
        <StarIcon sx={{ color: "gold", fontSize: 30, marginLeft: 1 }} />
      </Typography>

      <ul>
        {favourites.map((movie) => (
          <li style={{ fontSize: "24px" }} key={movie.id}>
            <Typography variant="h6">{movie.name}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
