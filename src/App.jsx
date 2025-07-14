import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Popup from './components/Popup';
import Footer from './components/Footer';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Replicate fade-in effect from original script
    document.body.classList.add('page-loaded');
  }, []);

  return (
    <>
      <Hero onContactClick={() => setIsPopupOpen(true)} />
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
      <Footer />
    </>
  );
};

export default App; 