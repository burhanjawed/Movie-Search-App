import React, { useState } from 'react';
import { MovieCards } from '../../components';
import axios from 'axios';
import './SearchMovies.scss';

const SearchMovies = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);

  // fetch movie list based on search query
  const searchMovies = (event) => {
    event.preventDefault();
    console.log('submitting');

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`;

    axios
      .get(url)
      .then((resp) => {
        setMovies(resp.data.results);
        console.log(JSON.stringify(resp.data.results, null, 2));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <form className='searchMovies__form' onSubmit={searchMovies}>
        <label htmlFor='query' className='searchMovies__label'>
          Movie Name
        </label>
        {/* Movie search box  */}
        <input
          type='text'
          value={movieQuery}
          onChange={(e) => setMovieQuery(e.target.value)}
          placeholder='i.e. Jurassic Park'
          className='searchMovies__input'
        />
        {/* Submit button  */}
        <button type='submit' className='searchMovies__button'>
          Search
        </button>
      </form>

      <MovieCards movieData={movies} />
    </>
  );
};

export default SearchMovies;
