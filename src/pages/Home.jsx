/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import tmdbService from "./../utils/tmdbService";
import CategoryList from "../components/CategoryList";
import Recommendation from "../components/Recommendation";
import GridGenere from "../components/GridGenre";
import { SearchResultsContext } from "../lib/context/search-context";

const Home = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTvShows, setTopRatedTvShows] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [upcomingTvShows, setUpcomingTvShows] = useState([]);

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

    const { searchResults, searchQuery } = useContext(SearchResultsContext);

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


            } catch (error) {
                console.error("Error fetching category movies", error);
            }
        };

        fetchCategoryMovies();
    }, []);

    return (
        <div>
            <h1 className="text-4xl text-center py-7">Movie Recommendation Platform</h1>

            {searchResults.length > 0 && (
                <GridGenere title={searchQuery} items={searchResults} />
            )}
            <Recommendation />
            <CategoryList title="Top Rated Movies" items={topRatedMovies} />
            <CategoryList title="Top Rated TV Shows" items={topRatedTvShows} />
            <CategoryList title="Upcoming Movies" items={upcomingMovies} />
            <CategoryList title="Upcoming Tv Shows" items={upcomingTvShows} />

        </div>
    );
};

export default Home;
