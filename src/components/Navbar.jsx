/* import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import tmdbService from './../utils/tmdbService';

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [redirectToSearch, setRedirectToSearch] = useState(false);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await tmdbService.searchMulti(searchQuery);
      // Habilita la redirección a la página de búsqueda con los resultados
      setRedirectToSearch(true);
    } catch (error) {
      console.error('Error searching', error);
    }
  };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/TVShows">TV Shows</Link>
                        </li>
                        <li>
                            <Link to="/Search">Search</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Samamovies</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/TVShows">TV Shows</Link>
                    </li>
                    <li>
                        <Link to="/Search">Search</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-none gap-2 navbar-end">
        <form onSubmit={handleSearchSubmit} className="form-control">
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-24 md:w-auto"
            placeholder="Search"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 */


import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import tmdbService from './../utils/tmdbService';
import CategoryList from '../components/CategoryList';


export function Navbar() {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Movies">Movies</Link>
                        </li>
                        <li>
                           <Link to="/TVShows"> TV Shows</Link>
                        </li>
                        <li>
                           <Link to="/Search"> Search</Link>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Samamovies</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/Movies">Movies</Link>
                    </li>
                    <li>
                      <Link to="/TVShows"> TV Shows</Link>
                    </li>
                    <li>
                           <Link to="/Search"> Search</Link>
                        </li>
                </ul>
            </div>
            <div className="flex-none gap-2 navbar-end">
            <form  className="form-control"> 
                   <Link to='/Search'> <input
                        type="text"
                
                        className="input input-bordered w-24 md:w-auto"
                    /></Link>
                </form>
                <div className="dropdown dropdown-end">
                    <div
                    
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
