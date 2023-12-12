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
    <div className='w w-4/5 m-auto border border-black text-white bg-slate-600'>
      {media ? (
        <div className='flex gap-10'>
          <img className='h h-72'
            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
            alt={media.title || media.name}
          />
          <div>
          <h2>{media.title || media.name}</h2>
          <p className='line line-clamp-3'>{media.overview}</p>
          <div className='flex gap-6'>
            <button onClick={handleLikeClick}><FontAwesomeIcon icon={faThumbsUp} /></button>
            <button onClick={handleDislikeClick}><FontAwesomeIcon icon={faThumbsDown} /></button>
          </div>
          {/* Agrega un enlace a la página de detalles */}
          <Link to={`/${media.media_type}/${media.id}`}>Ver detalles</Link>
        </div>
        </div>
      ) : (
        <p>Cargando recomendación...</p>
      )}
    </div>
    
  );
};

export default Recommendation;
