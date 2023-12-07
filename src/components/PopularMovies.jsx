// components/PopularMovies.jsx
import React, { useEffect, useState } from 'react';
import tmdbService from '../services/tmdbService';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMovies = await tmdbService.getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Error fetching popular movies', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
