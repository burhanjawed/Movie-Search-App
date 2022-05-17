import React from 'react';
import './MovieCards.scss';

const MovieCards = ({ movieData }) => {
  return (
    <div className='MovieCards__card-list'>
      {movieData
        .filter((movie) => movie.poster_path)
        .map((movie) => {
          return (
            <div className='MovieCards__card' key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt='Movie Poster'
                className='MovieCards__card--image'
              />
              <div className='MovieCards__card--details'>
                <h3 className='MovieCards__card--details--title'>
                  {movie.title}
                </h3>
                <p>
                  <small>RELEASE DATE: {movie.release_date}</small>
                </p>
                <p>
                  <small>RATING: {movie.vote_average}</small>
                </p>
                <p className='MovieCards__card--details--description'>
                  {movie.overview}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MovieCards;
