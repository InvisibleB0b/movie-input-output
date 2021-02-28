import React from 'react';

const MoviePoster = props => {

    if (props.movie && props.movie.Poster != null) {
        return (

            <div className="movieposter">
                <h3>Poster: </h3>
                <div> <img className="poster" alt="Poster" src={`https://image.tmdb.org/t/p/w500/${props.movie.Poster}`}></img> </div>
                <div>{props.movie.Title} - {props.movie.Year}</div>
            </div>
        );
    } else if (props.movie == null) {
        return null;
    }
    else {
        return (<div className="movieposter">
            <h3>Poster: </h3>
            <div> <p>No image found</p></div>
            <div>{props.movie.Title} - {props.movie.Year}</div>
        </div>);
    }

};

export default MoviePoster;