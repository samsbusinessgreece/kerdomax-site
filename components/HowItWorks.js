// components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'Connect', description: 'Link your property listings and calendars securely.' },
    { number: 2, title: 'Optimize', description: 'Our AI analyzes data to perfect your pricing and listing details.' },
    { number: 3, title: 'Earn More', description: 'Watch your bookings and revenue grow with automated intelligence.' },
  ];

  return (
    <section id="how-it-works" className="py-20 container mx-auto px-6 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-kerdo-slate">
          How It Works
        </h2>
        <p className="text-xl text-kerdo-light-text opacity-80">
          Get started in three simple steps and see your rental business transform.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row justify-around items-center space-y-12 md:space-y-0 md:space-x-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-kerdo-teal text-kerdo-navy text-3xl font-bold mb-6 shadow-xl border-4 border-kerdo-slate-700 animate-bounce">
              {step.number}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-kerdo-beige">{step.title}</h3>
            <p className="text-kerdo-light-text opacity-90 leading-relaxed">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rotate-90 md:rotate-0 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L19 12" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
