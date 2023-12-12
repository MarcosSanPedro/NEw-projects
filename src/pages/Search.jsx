import { useState, useEffect } from 'react';
import tmdbService from './../utils/tmdbService';
import CategoryList from '../components/CategoryList';
import GridGenre from '../components/GridGenre';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
   // Puede ser 'movie', 'tv', o 'multi'

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
        
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <GridGenre title="Search Results" items={searchResults} />
      )}
    </div>
  );
};

export default Home;






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
