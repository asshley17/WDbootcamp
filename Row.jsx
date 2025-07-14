import React from 'react';
import './Row.css';

function Row({ title }) {
  const movies = new Array(10).fill(0); // Placeholder array

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((_, index) => (
          <img
            key={index}
            className="row-poster"
            src={`https://via.placeholder.com/150x225.png?text=Movie+${index + 1}`}
            alt={`Movie ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
