import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import requests from '../Requests';
import { useAuth } from '../context/AuthContext';

const RateMovie = () => {
  const { user } = useAuth();

  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestsPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (user) {
      setLiked(!liked);
      if (disliked) {
        setDisliked(false);
      }
    } else {
      // Redirect to the login page or show a message indicating the need to log in
      alert('Please log in to rate movies.');
    }
  };

  const handleDislike = () => {
    if (user) {
      setDisliked(!disliked);
      if (liked) {
        setLiked(false);
      }
    } else {
      // Redirect to the login page or show a message indicating the need to log in
      alert('Please log in to rate movies.');
    }
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='flexbox flex-col items-center m-4 p-4'>
      <div className='flex mt-20'>
       
        <div className="mb-4 w-1/2 pr-4">
        <h1>Rate Movie</h1>
          <img
            className='w-full h-full object-cover'
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>
        <div className="w-1/2 pl-4">
          <div className="image-description mb-4">
            <h2 className='text-3xl font-bold mb-2 text-white'>{movie?.title}</h2>
            <p className='text-gray-400 text-2xl'>Released: {movie?.release_date}</p>
            <p className='text-gray-200 text-2xl'>{movie?.overview}</p>
          </div>
          <div className='flex'>
            <button
              className={`cursor-pointer mx-2 my-0 p-2 ${liked ? 'text-green liked' : ''}`}
              onClick={handleLike}
            >
              <FaThumbsUp size={34} color='white' /> {liked && 'Liked'}
            </button>
            <button
              onClick={handleDislike}
              className={disliked ? 'text-red disliked' : ''}
            >
              <FaThumbsDown size={34} color='white' /> {disliked && 'Disliked'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateMovie;
