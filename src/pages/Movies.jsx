import { useEffect, useState } from "react"
import tmdbService from "./../utils/tmdbService";
import GridGenre from "../components/GridGenre";

export function Movies() {
  const [selectedGenre, setSelectedGenre] = useState('28');
  const [genreMovies, setGenreMovies] = useState([]);

  const fetchGenreMovies = async () => {
    try {
      if (selectedGenre) {
        const totalPages = 6; 
        const movies = await tmdbService.searchMoviesByGenre(selectedGenre, totalPages);
        const shuffledMovies = shuffleArray(movies);
        setGenreMovies(shuffledMovies);
      }
    } catch (error) {
      console.error('Error fetching genre movies', error);
    }
  };

  useEffect(() => {
    fetchGenreMovies();
  }, [selectedGenre]);

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

    return(
        <div>
            <label htmlFor="genre">Genre</label>
            <select name="genre" id="genre" onChange={(e) => setSelectedGenre(e.target.value)}
        value={selectedGenre}>
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="16">Animation</option>
                <option value="80">Crime</option>
                <option value="35">Comedy</option>
                <option value="99">Documentary</option>
                <option value="14">Fantasy</option>
                <option value="27">Horror</option>
                <option value="10402">Music</option>
                <option value="9648">Mystey</option>
                <option value="10749">Romance</option>
                <option value="878">Science Fiction</option>
                <option value="53">Thriller</option>
                <option value="10752">War</option>
            </select>

            <GridGenre items={genreMovies} />
            
            

        </div>
    )
}