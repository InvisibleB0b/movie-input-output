import React, { Component } from 'react';
import './MovieList.css';
//import MOCK_MOVIES from './Shared/MockMovies'



class MovieList extends Component {
  handleChange = (e, movie) => {
    e.preventDefault();
    this.props.handle(movie);
  }

  handlePageChange = async (query, page) => {

    await this.props.pageChange(query, page);
  }

  render() {

    let pageing = [];

    let currentPage = this.props.searchTerms.currentPage;

    let currentSearch = this.props.searchTerms.query;

    let totalpages = this.props.searchTerms.totalPages;

    let startItterator = (currentPage < 3 ? 1 : currentPage - 2);

    let endItterator = (currentPage < totalpages - 2 ? currentPage + 2 : totalpages);


    if (currentPage !== 1 && currentPage !== 0) {
      pageing.push(<button onClick={(e) => { e.preventDefault(); this.handlePageChange(currentSearch, currentPage - 1); }} key={0}>&lt;</button>)
    }

    if (currentPage > 3) {
      pageing.push(<button onClick={(e) => { e.preventDefault(); this.handlePageChange(currentSearch, 1); }}>1</button>);
      pageing.push(<span>...</span>)
    }


    for (let i = startItterator; i <= endItterator; i++) {

      if (i !== currentPage) {


        pageing.push(<button onClick={(e) => { e.preventDefault(); this.handlePageChange(currentSearch, i); }} key={i}> {i}</button>);

      }
      else {
        pageing.push(<button key={i}><b>{i}</b></button>)
      }
    }

    if (currentPage < totalpages - 2 && currentPage !== 0 && currentPage !== totalpages) {


      pageing.push(<span>...</span>);
      pageing.push(<button onClick={(e) => { e.preventDefault(); this.handlePageChange(currentSearch, totalpages); }} key={totalpages}>{totalpages}</button>);

    }

    if (currentPage !== totalpages && currentPage !== 0) {


      pageing.push(<button onClick={(e) => { e.preventDefault(); this.handlePageChange(currentSearch, currentPage + 1); }} key={totalpages + 1}>&gt;</button>);

    }


    return (

      <div className="MovieList">
        <div className="movie-group">
          <h2>Movie list:</h2>
          <ul className="movies container">
            {this.props.movies.map((movie, index) => { return <li key={index} onClick={(e) => { this.handleChange(e, movie) }}>{movie.Title} - {movie.Year}</li> })}
          </ul>
        </div>
        <div className="pages">
          {pageing}
        </div>
      </div>
    );


  }
}

export default MovieList;
