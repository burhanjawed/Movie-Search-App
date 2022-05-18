import React from 'react';
import './MovieCards.scss';

const MovieCards = ({ movieData }) => {
  return (
    <div className='movieCards__card' data-testid='displayCard'>
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieData.poster_path}`}
        alt='Movie Poster'
        className='movieCards__card--image'
      />
      <div className='movieCards__card--details'>
        <h3 className='movieCards__card--details--title'>{movieData.title}</h3>
        <p>
          <small>RELEASE DATE: {movieData.release_date}</small>
        </p>
        <p>
          <small>RATING: {movieData.vote_average}</small>
        </p>
        <p className='movieCards__card--details--description'>
          {movieData.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCards;
