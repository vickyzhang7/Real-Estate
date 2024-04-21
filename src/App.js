import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import AboutPage from './pages/AboutPage';
import MarketplacePage from './pages/MarketplacePage';
import PortfolioPage from './pages/PortfolioPage';
import CommunityPage from './pages/CommunityPage';
import Contact from './pages/Contact';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

const App = () => {
  const { isLoading, error } = useAuth0();
  const element = (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );

  return (
    <Router>
      <div className="h-screen flex flex-col">
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        <Navbar />  {/* Now Navbar includes LoginButton and LogoutButton internally based on auth state */}
        {element}
      </div>
    </Router>
  );
};

export default App;
