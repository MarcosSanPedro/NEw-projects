import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useAuth();

  // getting the user email from the users db in Firebase
  const movieID = doc(db, 'users', `${user?.email}`);

  // when the user selects the heart icon, the movie will be saved in the db under the user profile. the user must be logged in for this feature to work
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <Link to={`/movies/${item.id}`}>
      <div className='w-160px sm:w-200px md:w-240px lg:w-280px inline-block cursor-pointer relative p-2'>
        <img
          className='w-full h-auto block'
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className='absolute top-10 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {item?.title}
          </p>
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className='absolute top-4 left-4 text-gray-300' />
            ) : (
              <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
