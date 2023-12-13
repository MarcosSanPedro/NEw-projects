// Use import syntax for ESM
import { Config } from 'tailwindcss';

/** @type {Config} */
const config = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('daisyui'),
  ],
};

export default config;
