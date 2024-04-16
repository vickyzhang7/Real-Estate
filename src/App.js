import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import AboutPage from './pages/AboutPage';
import MarketplacePage from './pages/MarketplacePage';
import './App.css';
const App = () => {
  const element = (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      {/* Add other route configurations */}
    </Routes>
  );

  return (
    <Router>
      <div className="h-screen flex flex-col">
          <Navbar />
          {element}
      </div>
    </Router>
  );
};

export default App;
