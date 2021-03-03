import React, { Component } from 'react';
import MovieImg from './assets/Image/movie_img.png';
// import MOCK_MOVIES from './Shared/MockMovies';
import MovieList from './MovieList.js';
import MoviePoster from './MoviePoster.js';
import MoviePlot from './MoviePlot.js';
import SearchBar from './SearchBox.js';
import axios from 'axios';
//import MovieService from './MovieService.js';



class App extends Component {
  state = { movies: [], selectedMovie: null, searchTerms: { query: "", currentPage: 0, totalPages: 0 } };

  handleSearch = async (searchQuery, pagenr) => {

    let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2d031ffa5bcb38a8bcf2d3c12904a7d8&query=${searchQuery}&page=${pagenr}`);

    let data = response.data.results;

    let formattetMovieList = data.map((movie) => {
      return {
        Title: movie.title,
        Poster: movie.backdrop_path,
        Plot: movie.overview,
        Year: movie.release_date
      }
    });


    this.setState({ movies: formattetMovieList, searchTerms: { query: searchQuery, currentPage: pagenr, totalPages: response.data.total_pages } });

  }

  handleMovieChange = (movie) => {

    this.setState({ selectedMovie: movie });
  }

  render() {

    return (

      <div className="App" >
        <div className="jumbotron">
          <h1>React Movies <img alt="Movie" src={MovieImg}></img> </h1>
           This small App demonstrates communication between child-components using Input/Output

        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <SearchBar submitter={this.handleSearch} />
            </div>


            <div className="col-6">
              <MovieList searchTerms={this.state.searchTerms} pageChange={this.handleSearch} movies={this.state.movies} handle={this.handleMovieChange} />
            </div>

            <div className="col-6">
              <div className="col-12">
                <MoviePoster movie={this.state.selectedMovie} />
              </div>
              <div className=" col-12">
                <MoviePlot movie={this.state.selectedMovie} />
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
