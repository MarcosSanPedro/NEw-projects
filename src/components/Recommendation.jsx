// Recommendation.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tmdbService from './../utils/tmdbService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Recommendation = () => {
  const [media, setMedia] = useState(null);

  const loadRecommendation = async () => {
    try {
      const randomMedia = await tmdbService.getRandomMedia();
      setMedia(randomMedia);
    } catch (error) {
      console.error('Error fetching recommendation', error);
    }
  };

  useEffect(() => {
    loadRecommendation();
  }, []);

  const handleLikeClick = () => {
    loadRecommendation();
  };

  const handleDislikeClick = () => {
    loadRecommendation();
  };

  return (
    <div>
      {media ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
            alt={media.title || media.name}
          />
          <h2>{media.title || media.name}</h2>
          <p>{media.overview}</p>
          <div>
            <button onClick={handleLikeClick}><FontAwesomeIcon icon={faThumbsUp} /></button>
            <button onClick={handleDislikeClick}><FontAwesomeIcon icon={faThumbsDown} /></button>
          </div>
          {/* Agrega un enlace a la página de detalles */}
          <Link to={`/${media.media_type}/${media.id}`}>Ver detalles</Link>
        </div>
      ) : (
        <p>Cargando recomendación...</p>
      )}
    </div>
  );
};

export default Recommendation;
