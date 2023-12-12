// Recommendation.js
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import tmdbService from './../utils/tmdbService';

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
            <button onClick={handleLikeClick}>Like</button>
            <button onClick={handleDislikeClick}>Dislike</button>
          </div>
          {/* Agrega un enlace a la página de detalles */}
          <Link to={`/details/${media.id}`}>Ver detalles</Link>
        </div>
      ) : (
        <p>Cargando recomendación...</p>
      )}
    </div>
  );
};

export default Recommendation;
