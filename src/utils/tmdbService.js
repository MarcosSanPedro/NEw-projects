const apiKey = import.meta.env.VITE_MOVIES_KEY; // Reemplaza con tu clave API de TMDB
const apiUrl = "https://api.themoviedb.org/3";

const tmdbService = {
    async getPopularMovies(pageCount = 1) {
        // Crea un array de promesas para realizar solicitudes para cada página
        const promises = Array.from({ length: pageCount }, (_, index) => {
            const page = index + 1;
            return fetch(
                `${apiUrl}/movie/top_rated?api_key=${apiKey}&page=${page}`,
            )
                .then((response) => response.json())
                .then((data) => data.results);
        });

        // Espera a que todas las promesas se resuelvan y combina los resultados
        const results = await Promise.all(promises);

        // Devuelve un array plano con todas las películas
        return results.flat();
    },

    async searchMulti(query) {
        try {
            const response = await fetch(
                `${apiUrl}/search/multi?api_key=${apiKey}&query=${query}`,
            );
            const data = await response.json();
            return data.results;
        } catch (error) {
            throw new Error("Error searching multi", error);
        }
    },

    async getRandomMedia() {
        try {
            // Elige aleatoriamente entre películas y programas de televisión
            const mediaType = Math.random() < 0.5 ? "movie" : "tv";

            // Obtiene una página aleatoria para evitar la repetición de recomendaciones
            const randomPage = Math.floor(Math.random() * 500) + 1;

            // Realiza la solicitud a la API de TMDB para obtener una película o programa de televisión aleatorio
            const response = await fetch(
                `${apiUrl}/trending/${mediaType}/day?api_key=${apiKey}&page=${randomPage}`,
            );
            const data = await response.json();

            // Elige aleatoriamente un elemento de los resultados
            const randomIndex = Math.floor(Math.random() * data.results.length);
            return data.results[randomIndex];
        } catch (error) {
            throw new Error("Error searching multi", error);
        }
    },

    async getRandomMovie() {
        try {
            // Obtener un número aleatorio de página (puede ajustarse según tus necesidades)
            const randomPage = Math.floor(Math.random() * 500) + 1;

            // Obtener la lista de películas de la página aleatoria
            const response = await fetch(
                `${apiUrl}/movie/popular?api_key=${apiKey}&page=${randomPage}`,
            );
            const data = await response.json();

            // Obtener una película aleatoria de la lista
            const randomMovie =
                data.results[Math.floor(Math.random() * data.results.length)];

            return randomMovie;
        } catch (error) {
            console.error("Error fetching random movie", error);
            throw error;
        }
    },

    async getUpcomingMovies(pageCount = 1) {
        // Crea un array de promesas para realizar solicitudes para cada página
        const promises = Array.from({ length: pageCount }, (_, index) => {
            const page = index + 1;
            return fetch(
                `${apiUrl}/movie/upcoming?api_key=${apiKey}&page=${page}`,
            )
                .then((response) => response.json())
                .then((data) => data.results);
        });

        // Espera a que todas las promesas se resuelvan y combina los resultados
        const results = await Promise.all(promises);

        // Devuelve un array plano con todas las películas
        return results.flat();
    },

    async getUpcomingTvShows(pageCount = 1) {
        // Crea un array de promesas para realizar solicitudes para cada página
        const promises = Array.from({ length: pageCount }, (_, index) => {
            const page = index + 1;
            return fetch(
                `${apiUrl}/tv/airing_today?api_key=${apiKey}&page=${page}`,
            )
                .then((response) => response.json())
                .then((data) => data.results);
        });

        // Espera a que todas las promesas se resuelvan y combina los resultados
        const results = await Promise.all(promises);

        // Devuelve un array plano con todas las películas
        return results.flat();
    },

    async searchMovies(query) {
        const response = await fetch(
            `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`,
        );
        const data = await response.json();
        return data.results;
    },

    async searchMoviesByGenre(genre, totalPages = 1) {
        try {
            let movies = [];
            for (let page = 1; page <= totalPages; page++) {
                const response = await fetch(
                    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre}&page=${page}`,
                );
                const data = await response.json();
                movies = movies.concat(data.results);
            }
            return movies;
        } catch (error) {
            throw new Error("Error fetching genre movies", error);
        }
    },

    async searchTvShowsByGenre(genre, totalPages = 1) {
        try {
            let tvShows = [];
            for (let page = 1; page <= totalPages; page++) {
                const response = await fetch(
                    `${apiUrl}/discover/tv?api_key=${apiKey}&with_genres=${genre}&page=${page}`,
                );
                const data = await response.json();
                tvShows = tvShows.concat(data.results);
            }
            return tvShows;
        } catch (error) {
            throw new Error("Error fetching genre TV shows", error);
        }
    },

    async getMovieDetails(movieId) {
        try {
            const response = await fetch(
                `${apiUrl}/movie/${movieId}?api_key=${apiKey}`,
            );
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Error fetching movie details", error);
        }
    },

    async getTVShowDetails(tvShowId) {
        try {
            const response = await fetch(
                `${apiUrl}/tv/${tvShowId}?api_key=${apiKey}`,
            );
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Error fetching TV show details", error);
        }
    },

    async getTopRatedTVShows(pageCount = 1) {
        // Crea un array de promesas para realizar solicitudes para cada página
        const promises = Array.from({ length: pageCount }, (_, index) => {
            const page = index + 1;
            return fetch(
                `${apiUrl}/tv/top_rated?api_key=${apiKey}&page=${page}`,
            )
                .then((response) => response.json())
                .then((data) => data.results);
        });

        // Espera a que todas las promesas se resuelvan y combina los resultados
        const results = await Promise.all(promises);

        // Devuelve un array plano con todas las películas
        return results.flat();
    },
};

export default tmdbService;
