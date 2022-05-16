import React from 'react';
import './SearchMovies.scss';

const SearchMovies = () => {
  return (
    <>
      <form className='searchMovies__form'>
        <label htmlFor='query' className='searchMovies__label'>
          Movie Name
        </label>
        <input
          type='text'
          placeholder='i.e. Jurassic Park'
          className='searchMovies__input'
        />
        <button type='submit' className='searchMovies__button'>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchMovies;
