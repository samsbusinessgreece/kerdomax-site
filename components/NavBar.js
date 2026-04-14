// components/NavBar.js
import React from 'react';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-overlay text-kerdo-light-text py-4 transition-all duration-300 ease-in-out shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-kerdo-slate">KERDO</span>
          <span className="text-kerdo-beige">MAX</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="hover:text-kerdo-teal transition-colors duration-300">Features</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className="hover:text-kerdo-teal transition-colors duration-300">How It Works</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="hover:text-kerdo-teal transition-colors duration-300">Pricing</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-kerdo-teal transition-colors duration-300">Contact</a>
        </div>
        <button className="bg-kerdo-teal text-kerdo-navy font-semibold py-2 px-6 rounded-lg hover:bg-teal-500 transition-colors duration-300 shadow-lg">
          Get Early Access
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
