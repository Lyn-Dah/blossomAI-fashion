import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import FashionGallery from './FashionGallery';
import Footer from './Footer';
import Header from './Header';
import Blog from './Blog';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <main className="p-8">
        <FashionGallery />
      </main>
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
  
}

export default App;

