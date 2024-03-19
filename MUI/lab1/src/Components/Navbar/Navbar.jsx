import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Link as MuiLink } from "@mui/material";

const Navbar = () => {
  const favourites = useSelector((state) => state.movies.favouriteCount);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderRadius: "10px", marginY: "20px" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Link to="/">
          <img src="/redux.png" alt="logo" width={60} height={60} />
        </Link>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            style={{ marginRight: "42px" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#222533" }}>
              Home
            </Link>
          </Typography>

          <Typography
            variant="h6"
            component="div"
            style={{ marginRight: "42px" }}
          >
            <Link
              to="/add-movie"
              style={{ textDecoration: "none", color: "#222533" }}
            >
              Add Movie
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link
              to="/favourites"
              style={{ textDecoration: "none", color: "#222533" }}
            >
              Favourites : {favourites}
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
