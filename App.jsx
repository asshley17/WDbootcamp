import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Row from './Row';
<footer style={{ textAlign: 'center', padding: '20px', color: '#777' }}>
  <p>&copy; 2025 Netflix Clone by [Your Name]</p>
</footer>


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      
    </div>
  );
}

export default App;
