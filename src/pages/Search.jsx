import { useState, useEffect } from "react";
import tmdbService from "./../utils/tmdbService";
import CategoryList from "../components/CategoryList";
import GridGenre from "../components/GridGenre";

const Search = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);

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
                const topRatedMovies = await tmdbService.getPopularMovies(5);
                const shuffledTopRatedMovies = shuffleArray(topRatedMovies);
                console.log(shuffledTopRatedMovies)
                setTopRatedMovies(shuffledTopRatedMovies);
            } catch (error) {
                console.error("Error fetching category movies", error);
            }
        };

        fetchCategoryMovies();
    }, []);



    return(
        <div>
            <GridGenre title="Top Rated Movies" items={topRatedMovies} />
        </div>
    )
}
export default Search













/* 
import { useState, useEffect } from 'react';
import tmdbService from './../utils/tmdbService';
import CategoryList from '../components/CategoryList';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('multi'); // Puede ser 'movie', 'tv', o 'multi'

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await tmdbService.searchMulti(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching', error);
    }
  };

  return (
    <div>
      <h1>Movie and TV Show Recommendation Platform</h1>

      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="searchQuery">Search:</label>
        <input
          type="text"
          id="searchQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="multi">All</option>
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
        </select>
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <CategoryList title="Search Results" items={searchResults} />
      )}
    </div>
  );
};

export default Search; */
