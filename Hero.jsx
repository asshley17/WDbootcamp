import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-contents">
        <h1>Movie Title</h1>
        <div className="hero-buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p className="hero-description">
          This is a brief description of the movie or show. It's just a placeholder.
        </p>
      </div>
      <div className="hero-fade" />
    </header>
  );
}

export default Hero;
