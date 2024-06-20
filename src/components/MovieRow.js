import React from 'react';
import MovieCard from './MovieCard';

const MovieRow = ({ movies, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;