import React from 'react';

const MoviePlot = props => {

    if (props.movie) {
        return (

            <div className="moviePlot">
                <h3>Movie Plot: </h3>
                <div>{props.movie.Plot}</div>
            </div>
        );
    } else {
        return null;
    }

};

export default MoviePlot;