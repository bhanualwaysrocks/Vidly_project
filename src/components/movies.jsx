import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = { Movies: getMovies() };

  handleDelete(movie) {
    let updated_movies = this.state.Movies.filter(
      (cur_movie) => cur_movie._id != movie._id
    );
    this.setState({ Movies: updated_movies });
  }

  randorMovies() {
    console.log(this.state.Movies);
    const movie_arr = this.state.Movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie["title"]}</td>
        <td>{movie["genre"].name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.handleDelete(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return movie_arr;
  }

  render() {
    const count = this.state.Movies.length;
    if (count === 0) return <p>There are no movies in database.</p>;

    return (
      <div>
        <nav>
          <p>Showing {this.state.Movies.length} movies in the Database.</p>
        </nav>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.randorMovies()}</tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
