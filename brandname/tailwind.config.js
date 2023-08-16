/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "titile-large": "42px",
    },
    extend: {
      backgroundImage: {
        'hero-image': "url(/assets/header/hero-cover.jpg)",
        'content-bg-1': "url(/assets/section-4/post-1.jpg",
        'content-bg-2': "url(/assets/section-4/post-2.jpg",
        'content-bg-3': "url(/assets/section-4/post-3.jpg",
        'content-bg-4': "url(/assets/section-4/post-4.jpg"
      },
    },
  },
  plugins: [],
};
