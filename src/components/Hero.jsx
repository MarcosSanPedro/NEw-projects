import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [featureMessage, setFeatureMessage] = useState('');
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios.get(requests.requestsPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const toggleOverview = () => {
    setExpanded(!expanded);
  };

  const handlePlayClick = () => {
    setFeatureMessage('This feature is coming soon!');
  };

  const handleWatchLaterClick = () => {
    setFeatureMessage('This feature is coming soon!');
  };

  const handleNextClick = () => {
    // Increment the movie index to get the next movie
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    setFeatureMessage(''); // Clear the feature message for the next movie
    setExpanded(false); // Collapse the overview for the next movie
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  const movie = movies[currentMovieIndex];

  return (
    <div className='relative w-full h-600px text-white'>
      <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
      <img
        className='w-full h-full object-cover'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className='absolute w-full top-20% p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button
            className='border bg-gray-300 text-black border-gray-300 py-2 px-5'
            onClick={handlePlayClick}
          >
            Play
          </button>
          <button
            className='border text-white border-gray-300 py-2 px-5 ml-4'
            onClick={handleWatchLaterClick}
          >
            Watch Later
          </button>
          <button
            className='border text-white border-gray-300 py-2 px-5 ml-4'
            onClick={handleNextClick}
          >
            Next
          </button>
          <p className='text-red-300 mt-2 text-lg'>{featureMessage}</p>
        </div>
        <p className='text-gray-400 text-sm'>
          Released: {movie?.release_date}
        </p>
        <p className='w-full md:max-w-70% lg:max-w-50% xl:max-w-35% text-gray-200 text-2xl'>
          {expanded ? movie?.overview : truncateString(movie?.overview, 150)}
          <button
            className='text-blue-500 underline cursor-pointer'
            onClick={toggleOverview}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
