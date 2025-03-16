import React from 'react';
import { Routes, Route } from "react-router-dom";  // ❌ Removed extra Router
import './App.css';
import HeroSection from './HeroSection';
import FashionGallery from './FashionGallery';
import Footer from './Footer';
import Header from './Header';
import Blog from './Blog';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <main className="p-8">
        <FashionGallery />
        <Blog />
        <ContactForm />
        <Footer />
      </main>
    
      
    </div>
  );
}

export default App;

