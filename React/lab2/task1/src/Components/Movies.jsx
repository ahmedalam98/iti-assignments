import React, { Component } from "react";
import Movie from "./Movie";
import { v4 as uuid } from "uuid";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    // Limit the number of movies to 20
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data }));
  }

  render() {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {this.state.movies.map((movie) => (
          <Movie key={uuid()} movie={movie}></Movie>
        ))}
      </div>
    );
  }
}

export default Movies;
