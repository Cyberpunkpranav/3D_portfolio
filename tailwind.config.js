// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan all files in the app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include custom components directory if used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
