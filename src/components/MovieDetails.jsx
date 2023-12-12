// MovieDetails.js
import { useEffect, useState } from 'react';
import tmdbService from '../utils/tmdbService';

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieId = match.params.id;
        const details = await tmdbService.getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetails();
  }, [match.params.id]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <p>Valoración: {movieDetails.vote_average}</p>
          <p>Fecha de lanzamiento: {movieDetails.release_date}</p>
          <p>Géneros: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
          {/* Agrega más detalles según tus necesidades */}
        </div>
      ) : (
        <p>Cargando detalles de la película...</p>
      )}
    </div>
  );
};

export default MovieDetails;
