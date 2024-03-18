import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFavourites, removeFavouriteMovie } from "../moviesSlice";

const Favourites = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.movies.favouriteCount);
  const favourites = useSelector((state) => state.movies.favourites);

  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch]);

  return (
    <div>
      <h1>
        Your Favourive Movies = {count}
        <i
          style={{ marginLeft: "12px" }}
          class="fa-solid fa-star fa-1x gold-star"
        ></i>
      </h1>

      <ul>
        {favourites.map((movie) => (
          <li style={{ fontSize: "24px" }} key={movie.id}>
            {movie.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
