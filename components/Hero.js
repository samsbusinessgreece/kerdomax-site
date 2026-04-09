// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center p-6 bg-cover bg-center container mx-auto">
      <div className="absolute inset-0 bg-gradient-dark -z-10"></div>
      <div className="z-10 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Maximize Your Rental Revenue with AI
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-kerdo-light-text opacity-90 animate-fade-in delay-500">
          Dynamic pricing, listing optimization, and intelligent guest communication — built for Greek hosts.
        </p>
        <div className="flex justify-center space-x-6 animate-fade-in delay-1000">
          <button className="bg-kerdo-teal text-kerdo-navy font-bold py-3 px-8 rounded-lg text-lg hover:bg-teal-500 transition-colors duration-300 shadow-2xl">
            Join the Beta
          </button>
          <button className="border-2 border-kerdo-teal text-kerdo-teal font-bold py-3 px-8 rounded-lg text-lg hover:bg-kerdo-slate hover:text-kerdo-light-text transition-colors duration-300 shadow-2xl ghost-button">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
