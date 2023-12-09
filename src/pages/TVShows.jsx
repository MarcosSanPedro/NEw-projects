import { useEffect, useState } from "react"
import tmdbService from "./../utils/tmdbService";
import GridGenre from "../components/GridGenre";

export function TVShows() {
  const [selectedTvShow, setSelectedTvShow] = useState('10759');
  const [genreTvShow, setGenreTvshow] = useState([]);

  const fetchCategoryTvShows = async () => {
    try {
      if (selectedTvShow) {
        const totalPages = 6; // Cambia este número al número de páginas que desees
        const tvShows = await tmdbService.searchTvShowsByGenre(selectedTvShow, totalPages);
        
        // Barajar las películas aleatoriamente
        const shuffledTvShow = shuffleArray(tvShows);
        
        setGenreTvshow(shuffledTvShow);
      }
    } catch (error) {
      console.error('Error fetching genre movies', error);
    }
  };

  useEffect(() => {
    fetchCategoryTvShows();
  }, [selectedTvShow]);

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
            <select name="genre" id="genre" onChange={(e) => setSelectedTvShow(e.target.value)}
        value={selectedTvShow}>
                <option value="10759">Action & Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="99">Documentary</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="10762">Kids</option>
                <option value="9648">Mystery</option>
                <option value="10765">SciFi & Fantasy</option>
                <option value="10749">Romance</option>
                <option value="10764">Reality</option>
                <option value="10768">War & Politics</option>
            </select>

            <GridGenre items={genreTvShow} />
            
            

        </div>
    )
}