import '../index.css';
import Weather from './Api/Weather';

const Navbar = () => {
  const links = ['Park Info', 'Attractions', 'Events', 'Help'];
  const options = [
    ['Map', 'Option 2', 'Option 3', 'Option 4'],
    ['Rides', 'Option 6', 'Option 7', 'Option 8'],
    ['Shows', 'Option 10', 'Option 11', 'Option 12'],
    ['FAQ', 'Feedback', 'Contact Us', 'Feedback'],
  ];

  return (
    <div className="flex navbar bg-gray-600 text-primary-content justify-between items-center w-screen p-3 ">
      {/* Left side container for Logo and Links */}
      <div className="flex justify-left items-center">
        {/* Logo */}
        <div className="logo text-3xl font-bold">Your Logo</div>

        {/* Links */}
        <div className="links flex ml-4 text-2xl text-white font-semibold">
          {links.map((link, index) => (
            <div key={index} className="group">
              <a href="#" className="px-4 py-2 hover:text-cyan-400">
                {link}
              </a>
              <div className="hidden group-hover:block absolute bg-gray-600 text-base text-white mt-2 p-2 place-content-center">
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

      {/* Right side container for Search and Weather icon */}
      <div className="flex justify-end flex-wrap-reverse items-center">
        <input
          type="text"
          placeholder="Search"
          className="input file-input-bordered w-24 md:w-auto px-2 py-1 mr-4 border border-gray-300 rounded"
        />
        <button className="btn btn-ghost text-xl px-4 py-2 bg-blue-600 text-white rounded hover:bg-gray-600">
          Search
        </button>

        <div className="ml-4">
          {/* Weather icon/component */}
          <span role="img" aria-label="Weather Icon">
            <Weather/>          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
