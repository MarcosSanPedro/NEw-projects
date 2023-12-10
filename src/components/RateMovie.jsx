import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import requests from '../Requests';


const RateMovie = ({ item }) => {
  
    const [movies, setMovies] = useState ([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestsPopular).then((response) => {
          setMovies(response.data.results);
        });
      }, []);

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) {
      setDisliked(false);
    }
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) {
      setLiked(false);
    }
  };

  return (
    <div className='border flex flex-col items-center m-4 p-4 border-solid border-[#ccc]'>
      <div className="mb-4">
        <img className='max-w-full h-auto' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title} />
      </div>
      <div className="image-description mb-4">
        <p className="text-center">This is an amazing image!</p>
      </div>
      <div className='flex'>
        <button className='cursor-pointer mx-2 my-0 p-2' onClick={handleLike} className={liked ? 'text-green liked' : ''}>
          <FaThumbsUp /> {liked && 'Liked'}
        </button>
        <button onClick={handleDislike} className={disliked ? 'text-red disliked' : ''}>
          <FaThumbsDown /> {disliked && 'Disliked'}
        </button>
      </div>
    </div>
  );
};

export default RateMovie;
