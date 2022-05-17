import React, { useState } from 'react';
import { MovieCards, Loading } from '../../components';
import axios from 'axios';
import './SearchMovies.scss';

const SearchMovies = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieQueried, setMovieQueried] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // fetch movie list based on search query
  const searchMovies = (event) => {
    event.preventDefault();
    console.log('submitting');
    setMovieQueried(true);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`;

    axios
      .get(url)
      .then((resp) => {
        setMovies(resp.data.results);
        setLoaded(true);
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

      {loaded ? (
        <>
          {movies.length !== 0 ? (
            <div className='searchMovies__card-list'>
              {movies
                .filter((movie) => movie.poster_path)
                .map((movie) => {
                  return <MovieCards movieData={movie} key={movie.id} />;
                })}
            </div>
          ) : movieQueried ? (
            <h1 className='searchMovies__card-NoMovieFound'>No movie found</h1>
          ) : (
            ''
          )}
        </>
      ) : !movieQueried ? (
        ''
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SearchMovies;
