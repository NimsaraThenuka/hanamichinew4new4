import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ja'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ja' : 'en');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation language={language} onLanguageToggle={toggleLanguage} />
        
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/services" element={<ServicesPage language={language} />} />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
        </Routes>

        <Footer language={language} />
      </div>
    </Router>
  );
}
