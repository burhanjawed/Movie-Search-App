import React from 'react';
import './MovieCards.scss';

const MovieCards = ({ movieData }) => {
  return (
    <div className='MovieCards__card-list'>
      {movieData.map((movie) => {
        return (
          <div className='MovieCards__card' key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt='Movie Poster'
            />
            <h3>{movie.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCards;
