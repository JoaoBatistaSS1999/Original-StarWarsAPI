import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loading from "./components/Overlays/Loading/Loading";
import FetchError from "./components/Overlays/Alerts/FetchErrors/FetchError";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(false);

  const handleAlert = () => {
    setAlert((prevState) => !prevState);
  };

  const fetchMoviesHandler = async (caller) => {
    setMovies([]);
    const path = caller.currentTarget.getAttribute("path-val");

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`https://swapi.dev/api/${path}`);

      if (!response.ok) {
        throw new Error(
          "We couldn't get any valid data from the request URL ⚠️"
        );
      }

      const data = await response.json();
      const moviesArray = data.results;
      const moviesFormatedData = moviesArray.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          openingText: item.opening_crawl,
          releaseDate: item.release_date,
        };
      });

      setMovies(moviesFormatedData);
    } catch (error) {
      setError(error.message);
      setAlert(true);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section className='button-container'>
        <button path-val='films' onClick={fetchMoviesHandler}>
          Fetch Movies
        </button>
        <button path-val='film' onClick={fetchMoviesHandler}>
          Get Error
        </button>
      </section>
      <section>
        {isLoading && <Loading open={isLoading} />}

        {!isLoading && movies.length > 0 && <MoviesList movieData={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <h3>Fetch some movies!</h3>
        )}
        {!isLoading && error && (
          <FetchError open={alert} onClose={handleAlert}>
            {error}
          </FetchError>
        )}
        {error && <h3>We are sorry for the error, maybe try again!</h3>}
        {isLoading && <h3>Loading...</h3>}
      </section>
    </React.Fragment>
  );
}

export default App;
