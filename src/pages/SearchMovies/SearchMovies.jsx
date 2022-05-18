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
  const searchMovies = async (event) => {
    event.preventDefault();
    setMovieQueried(true);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`;

    await axios
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
      <form
        className='searchMovies__form'
        onSubmit={searchMovies}
        data-testid='searchForm'
      >
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
          data-testid='searchInput'
        />
        {/* Submit button  */}
        <button
          type='submit'
          className='searchMovies__button'
          data-testid='searchButton'
        >
          Search
        </button>
      </form>

      {loaded ? (
        <>
          {movies.length !== 0 ? (
            <div
              className='searchMovies__card-list'
              data-testid='displayCardList'
            >
              {movies
                .filter((movie) => movie.poster_path)
                .map((movie) => {
                  return <MovieCards movieData={movie} key={movie.id} />;
                })}
            </div>
          ) : movieQueried ? (
            <h1
              className='searchMovies__card-NoMovieFound'
              data-testid='displayNoMovieFound'
            >
              No movie found
            </h1>
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
