import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaXing } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-4xl font-bold">Coming Soon!</div>

        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400 transition duration-300">
            <FaFacebook size={40} />
          </a>

          <a href="#" className="text-white hover:text-gray-400 transition duration-300">
            <FaInstagram size={40} />
          </a>

          {/* Replace 'FaXing' with the appropriate react-icons component for the "X" icon */}
          <a href="#" className="text-white hover:text-gray-400 transition duration-300">
            <FaXing size={40} />
          </a>

          <a href="#" className="text-white hover:text-gray-400 transition duration-300">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;