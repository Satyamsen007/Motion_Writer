/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'PrimaryFont': ['Proxima Nova Regular', 'cursive'],
        'SecondaryFont': ['Cardillac-Regular', 'sans-serif'],
        'LogoFont': ['BeautyDemo', 'cursive'],
      },
      colors: {
        'primary': '#4583B4',
        'secondary': '#F8CB46',
        'textColor': '#2F2F2F',
        'whiteColor': '#FFFFFF',
      },
      screens: {
        'extraSmall': '320px', // For very small screens like older phones
        'small': '480px', // For smaller smartphones
        'medium': '768px', // For tablets and small laptops
        'large': '1024px', // For desktops and large tablets
        'extraLarge': '1280px', // For larger desktops
        'wideScreen': '1536px', // For ultra-wide screens
      },
    },
  },
  plugins: [],
};
