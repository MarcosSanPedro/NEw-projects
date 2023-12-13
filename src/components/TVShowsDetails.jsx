// TVShowDetails.js
import React, { useEffect, useState } from 'react';
import tmdbService from '../utils/tmdbService';

const TVShowDetails = ({ match }) => {
  const [tvShowDetails, setTVShowDetails] = useState(null);

  useEffect(() => {
    const fetchTVShowDetails = async () => {
      try {
        const tvShowId = match.params.id;
        const details = await tmdbService.getTVShowDetails(tvShowId);
        setTVShowDetails(details);
      } catch (error) {
        console.error('Error fetching TV show details', error);
      }
    };

    fetchTVShowDetails();
  }, [match.params.id]);

  return (
    <div>
      {tvShowDetails ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShowDetails.poster_path}`}
            alt={tvShowDetails.name}
          />
          <h2>{tvShowDetails.name}</h2>
          <p>{tvShowDetails.overview}</p>
          <p>Valoración: {tvShowDetails.vote_average}</p>
          <p>Fecha de lanzamiento: {tvShowDetails.first_air_date}</p>
          <p>Géneros: {tvShowDetails.genres.map((genre) => genre.name).join(', ')}</p>
          {/* Agrega más detalles según tus necesidades */}
        </div>
      ) : (
        <p>Cargando detalles del programa de televisión...</p>
      )}
    </div>
  );
};

export default TVShowDetails;
``
