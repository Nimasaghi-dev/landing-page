// Desc: DarkMode component
import React from 'react';

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-4 right-4 p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full"
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkMode;