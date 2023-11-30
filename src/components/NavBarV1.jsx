import React from 'react';
import '../index.css';

const Navbar = () => {
  const links = ['Link 1', 'Link 2', 'Link 3', 'Link 4'];
  const options = [
    ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    ['Option 5', 'Option 6', 'Option 7', 'Option 8'],
    ['Option 9', 'Option 10', 'Option 11', 'Option 12'],
    ['Option 13', 'Option 14', 'Option 15', 'Option 16'],
  ];

  return (
    <div className="navbar bg-primary text-primary-content justify-between">
      {/*Div container for Left side logo and links*/}
      <div className="flex items-center">
        
        {/*Logo*/}
        <div className="logo text-2xl font-bold">Your Logo</div>
        
        {/*Links*/}
        <div className="links flex ml-4">
          {links.map((link, index) => (
            <div key={index} className="group">
              <a href="#" className="px-4 py-2 hover:text-cyan-400">
                {link}
              </a>
              <div className="hidden group-hover:block absolute bg-gray-800 text-white mt-2 p-2">
                {options[index].map((option, i) => (
                  <a key={i} href="#" className="block py-1">
                    {option}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Right side search field/button and weather icon*/}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="input file-input-bordered w-24 md:w-auto px-2 py-1 mr-4 border border-gray-300 rounded"
        />
        <button className="btn btn-ghost text-xl px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">
          Search
        </button>
        
        <div className="ml-4">
          {/* Weather icon*/}
          <span role="img" aria-label="Weather Icon">
            ☀️
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
