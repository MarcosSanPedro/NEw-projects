import { useEffect, useState } from 'react';
import tmdbService from './../utils/tmdbService';
import CategoryList from '../components/CategoryList';

const Home = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [romanceMovies, setRomanceMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [documentaryMovies, setDocumentaryMovies] = useState([]);
    // Agrega más estados para otras categorías según tus necesidades
  
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    useEffect(() => {
      const fetchCategoryMovies = async () => {
        try {
          const topRatedMovies = await tmdbService.getPopularMovies(); // 10749 es el código para el género Romance, ajusta según tus necesidades
          const shuffledTopRatedMovies = shuffleArray(topRatedMovies);
          setTopRatedMovies(shuffledTopRatedMovies);

          const romanceMovies = await tmdbService.searchMoviesByGenre('10749'); // 10749 es el código para el género Romance, ajusta según tus necesidades
          const shuffledRomanceMovies = shuffleArray(romanceMovies);
          setRomanceMovies(shuffledRomanceMovies);

          const actionMovies = await tmdbService.searchMoviesByGenre('28'); // 10749 es el código para el género Romance, ajusta según tus necesidades
          setActionMovies(actionMovies);
  
          const comedyMovies = await tmdbService.searchMoviesByGenre('35'); // 35 es el código para el género Comedia
          setComedyMovies(comedyMovies);

          const documentaryMovies = await tmdbService.searchMoviesByGenre('99'); // 35 es el código para el género Comedia
          setDocumentaryMovies(documentaryMovies);

          const horrorMovies = await tmdbService.searchMoviesByGenre('27'); // 35 es el código para el género Comedia
          setHorrorMovies(horrorMovies);
  
          // Agrega más llamadas a la API para otras categorías
        } catch (error) {
          console.error('Error fetching category movies', error);
        }
      };
  
      fetchCategoryMovies();
    }, []);
  
    return (
      <div>
        <h1>Movie Recommendation Platform</h1>
        {/* Agrega tu barra de búsqueda aquí */}
  
        <CategoryList title="Top Rated Movies" items={topRatedMovies} />
        <CategoryList title="Romance" items={romanceMovies} />
        <CategoryList title="Comedy" items={comedyMovies} />
        <CategoryList title="Action" items={actionMovies} />
        <CategoryList title="Documentary" items={documentaryMovies} />
        <CategoryList title="Horror" items={horrorMovies} />
        {/* Agrega más instancias de CategoryList para otras categorías */}
      </div>
    );
  };
  
  export default Home;