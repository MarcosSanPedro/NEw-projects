import { useState, useEffect } from 'react';
import tmdbService from './../utils/tmdbService';

const Recommendation = () => {
  const [movie, setMovie] = useState(null);

  // Función para cargar una nueva recomendación
  const loadRecommendation = async () => {
    try {
      const randomMovie = await tmdbService.getRandomMovie(); // Puedes ajustar esta llamada según tus necesidades
      setMovie(randomMovie);
    } catch (error) {
      console.error('Error fetching recommendation', error);
    }
  };

  // Cargar la primera recomendación al montar el componente
  useEffect(() => {
    loadRecommendation();
  }, []);

  // Función para manejar el clic en el botón "Like"
  const handleLikeClick = () => {
    // Puedes agregar lógica adicional aquí, por ejemplo, enviar la valoración al servidor
    // y luego cargar la siguiente recomendación
    loadRecommendation();
  };

  // Función para manejar el clic en el botón "Dislike"
  const handleDislikeClick = () => {
    // Puedes agregar lógica adicional aquí si es necesario
    // y luego cargar la siguiente recomendación
    loadRecommendation();
  };

  return (
    <div>
      {movie ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div>
            <button onClick={handleLikeClick}>Like</button>
            <button onClick={handleDislikeClick}>Dislike</button>
          </div>
        </div>
      ) : (
        <p>Cargando recomendación...</p>
      )}
    </div>
  );
};

export default Recommendation;
