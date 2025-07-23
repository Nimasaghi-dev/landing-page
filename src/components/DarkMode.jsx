// Desc: DarkMode component
import React from 'react';

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full transition-colors duration-200"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkMode;