import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaRegUser, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileClick = () => {
    if (user?.email) {
      // User is logged in, show profile and account options
      setShowOptions(!showOptions);
    } else {
      // User is not logged in, redirect to login page
      navigate('/login');
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-100 w-full fixed top-0 bg-black text-white'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          SABMAR Movies
        </h1>
      </Link>
      <div className='relative'>
        <button
          onClick={handleProfileClick}
          className='text-white pr-4 cursor-pointer flex items-center'
        >
          {user?.email ? (
            <FaUser className='w-8 h-8 rounded-full' />
          ) : (
            <FaRegUser className='w-8 h-8' />
          )}
          <span className='pl-2'>{user?.email ? 'Profile' : 'Sign In'}</span>
        </button>
        {showOptions && (
          <div className='absolute top-10 right-0 bg-white p-4 shadow-md rounded'>
            {user?.email ? (
              <>
                <Link to='/account'>
                  <button className='text-gray-800 pr-4'>Account</button>
                </Link>
                <Link to='/profile'>
                  <button className='text-gray-800 pr-4'>Profile</button>
                </Link>
                <button
                  onClick={handleLogout}
                  className='text-red-600 cursor-pointer'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <p></p>
                <Link to='/login'>
                  <button className='text-gray-800 pr-4'>Sign In</button>
                </Link>
                <Link to='/signup'>
                  <button className='text-gray-800 pr-4'>Sign Up</button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
