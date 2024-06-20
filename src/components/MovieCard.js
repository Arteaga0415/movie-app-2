import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={movie.poster_path} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;