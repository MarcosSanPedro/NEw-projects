const scrollbarHide = require('tailwind-scrollbar-hide');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui"),scrollbarHide],
    daisyui: {
        themes: ["light"],
    },
};
