import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MarketplacePage from './pages/MarketplacePage';
import './App.css';

const App = () => {
  const element = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      {/* Add other route configurations */}
    </Routes>
  );

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          {element}
        </header>
      </div>
    </Router>
  );
};

export default App;
