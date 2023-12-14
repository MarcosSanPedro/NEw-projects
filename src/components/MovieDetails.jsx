import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [mediaDetails, setMediaDetails] = useState(null);

  useEffect(() => {
    const fetchMediaDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=962b101b6006d8adaf4068e595dc24e7`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setMediaDetails({
          type: 'movie',
          title: data.title,
          overview: data.overview,
          release_date: data.release_date,
          vote_average: data.vote_average,
          genres: data.genres,
          poster_path: data.poster_path,
        });
      } catch (error) {
        console.error('Error fetching media details:', error);
      }
    };

    fetchMediaDetails();
  }, [id]);

  if (!mediaDetails) {
    return <div>Loading...</div>;
  }

  const {
    type,
    title,
    overview,
    release_date,
    vote_average,
    genres,
    poster_path,
  } = mediaDetails;

  
  return (
    <div className='flex flex-col lg:flex-row mt-10'>
      <div className=' w-3/4 m-auto lg:w-full h-full '>
      <img className='m-auto max-w-full lg:max-w-xl h-96 rounded'
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={type === 'movie' ? title : name}
      />
      </div>
      <div className='flex flex-col gap-5'>
      <h2>{type === 'movie' ? title : name}</h2>
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Rating: {vote_average}⭐</p>
      <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
