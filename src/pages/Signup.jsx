import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-cover' style={{backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`}}>
      <div className='w-full max-w-md p-8 rounded-md bg-black/75 text-white'>
        <h1 className='text-3xl font-bold text-center mb-8'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='p-3 bg-gray-700 rounded text-white'
            type='email'
            placeholder='Email'
            autoComplete='email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='p-3 bg-gray-700 rounded text-white'
            type='password'
            placeholder='Password'
            autoComplete='current-password'
          />
          <button className='bg-red-600 py-3 rounded font-bold'>
            Sign Up
          </button>
          <div className='flex justify-between items-center text-sm text-gray-200'>
            <label>
              <input className='mr-2' type='checkbox' />
              Remember me
            </label>
            <Link to='/forgot-password'>Need Help?</Link>
          </div>
        </form>
        <p className='py-8 text-sm text-gray-300 text-center'>
          <span>Already subscribed to Netflix?</span> <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
