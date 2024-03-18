import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favourites = useSelector((state) => state.movies.favouriteCount);

  return (
    <nav>
      <Link to="/">
        <img src="/redux.png" alt="logo" width={60} height={60} />
      </Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-movie">Add Movie</Link>
        <Link to="/favourites">Favourites : {favourites}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
