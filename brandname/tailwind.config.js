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
        'contact-img': "url(/assets/contact/background.jpg)",
        'content-img-1': "url(/assets/section-4/post-1.jpg",
        'content-img-2': "url(/assets/section-4/post-2.jpg",
        'content-img-3': "url(/assets/section-4/post-3.jpg",
        'content-img-4': "url(/assets/section-4/post4.jpg",
      },
    },
  },
  plugins: [],
};
