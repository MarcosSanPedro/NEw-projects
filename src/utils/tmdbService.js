// tmdbService.js
const apiKey = '962b101b6006d8adaf4068e595dc24e7'; // Reemplaza con tu clave API de TMDB
const apiUrl = 'https://api.themoviedb.org/3';

const tmdbService = {
  async getPopularMovies(page = 1) {
    const response = await fetch(`${apiUrl}/movie/top_rated?api_key=${apiKey}&page=${page}`);
    const data = await response.json();
    return data.results;
  },

  async searchMovies(query) {
    const response = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    return data.results;
  },

  async searchMoviesByGenre(genre) {
    const response = await fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre}`);
    const data = await response.json();
    return data.results;
  },
};

export default tmdbService;

