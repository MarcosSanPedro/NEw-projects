/* eslint-disable react/prop-types */
import React from "react";

export function Dropdown({ title, dropdownItems, isOpen, onToggle }) {
  return (
    <div className="relative justify-center font-medium text-3xl text-white items-center">
      <button
        className={`whitespace-nowrap ${isOpen ? 'underline' : ''}`}
        onClick={onToggle}
      >
        {title}
      </button>
      {isOpen && (
        <ul className="absolute mt-2 bg-gray-800 text-white p-2">
          {dropdownItems.map((element, index) => (
            <li key={index}>
              <button>{element}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
