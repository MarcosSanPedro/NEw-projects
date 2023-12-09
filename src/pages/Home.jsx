import { useEffect, useState } from "react";
import tmdbService from "./../utils/tmdbService";
import CategoryList from "../components/CategoryList";

const Home = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTvShows, setTopRatedTvShows] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [upcomingTvShows, setUpcomingTvShows] = useState([]); 
    /* const [romanceMovies, setRomanceMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [documentaryMovies, setDocumentaryMovies] = useState([]);  */
    // Agrega más estados para otras categorías según tus necesidades

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    };

    useEffect(() => {
        const fetchCategoryMovies = async () => {
            try {
                const topRatedMovies = await tmdbService.getPopularMovies(5); // 10749 es el código para el género Romance, ajusta según tus necesidades
                const shuffledTopRatedMovies = shuffleArray(topRatedMovies);
                console.log(shuffledTopRatedMovies)
                setTopRatedMovies(shuffledTopRatedMovies);

                const topRatedTvShows = await tmdbService.getTopRatedTVShows(5); // 10749 es el código para el género Romance, ajusta según tus necesidades
                const shuffledTopRatedTvShows = shuffleArray(topRatedTvShows);
                console.log(shuffledTopRatedTvShows)
                setTopRatedTvShows(shuffledTopRatedTvShows);

                const upcomingMovies = await tmdbService.getUpcomingMovies(5); // 10749 es el código para el género Romance, ajusta según tus necesidades
                const shuffledUpcomingMovies = shuffleArray(upcomingMovies);
                setUpcomingMovies(shuffledUpcomingMovies);

                const upcomingTvShows = await tmdbService.getUpcomingTvShows(5); // 10749 es el código para el género Romance, ajusta según tus necesidades
                const shuffledUpcomingTvShows = shuffleArray(upcomingTvShows);
                setUpcomingTvShows(shuffledUpcomingTvShows);

               /*  const romanceMovies =
                    await tmdbService.searchMoviesByGenre("10749"); // 10749 es el código para el género Romance, ajusta según tus necesidades
                const shuffledRomanceMovies = shuffleArray(romanceMovies);
                setRomanceMovies(shuffledRomanceMovies);

                const actionMovies =
                    await tmdbService.searchMoviesByGenre("28"); // 10749 es el código para el género Romance, ajusta según tus necesidades
                setActionMovies(actionMovies);

                const comedyMovies =
                    await tmdbService.searchMoviesByGenre("35"); // 35 es el código para el género Comedia
                setComedyMovies(comedyMovies);

                const documentaryMovies =
                    await tmdbService.searchMoviesByGenre("99"); // 35 es el código para el género Comedia
                setDocumentaryMovies(documentaryMovies);

                const horrorMovies =
                    await tmdbService.searchMoviesByGenre("27"); // 35 es el código para el género Comedia
                setHorrorMovies(horrorMovies); */

                // Agrega más llamadas a la API para otras categorías
            } catch (error) {
                console.error("Error fetching category movies", error);
            }
        };

        fetchCategoryMovies();
    }, []);

    return (
        <div>
            <h1>Movie Recommendation Platform</h1>
            {/* Agrega tu barra de búsqueda aquí */}

            <CategoryList title="Top Rated Movies" items={topRatedMovies} />
            <CategoryList title="Top Rated TV Shows" items={topRatedTvShows} />
            <CategoryList title="Upcoming Movies" items={upcomingMovies} />
            <CategoryList title="Upcoming Tv Shows" items={upcomingTvShows} />
            {/* <CategoryList title="Romance" items={romanceMovies} />
            <CategoryList title="Comedy" items={comedyMovies} />
            <CategoryList title="Action" items={actionMovies} />
            <CategoryList title="Documentary" items={documentaryMovies} />
            <CategoryList title="Horror" items={horrorMovies} /> */}
            {/* Agrega más instancias de CategoryList para otras categorías */}

        </div>
    );
};

export default Home;
