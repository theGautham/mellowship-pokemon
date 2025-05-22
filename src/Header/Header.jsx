import React, { useState, useEffect } from 'react';
import './Header.css';
import pokeball from '../assets/pokeball.png';

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="header">
      <div className="head-container">
        <div className="head-bottom">
          <img src={pokeball} alt="Pokéball" />
          <h1>Pokémon Team Builder</h1>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
        >
          {theme === 'light' ? '☀' : '🌙'}
        </button>
      </div>
    </div>
  );
};

export default Header;