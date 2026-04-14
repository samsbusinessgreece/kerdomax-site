// components/Features.js
import React from 'react';

const featuresData = [
  {
    icon: '📊',
    title: 'Dynamic Pricing',
    description: 'AI-driven pricing tailored to Greek seasonality, local events, and demand patterns.'
  },
  {
    icon: '✍️',
    title: 'Listing Optimization',
    description: 'AI-generated titles, descriptions, and photo recommendations.'
  },
  {
    icon: '💬',
    title: 'Guest Messaging',
    description: 'Intelligent, multilingual guest communication templates.'
  },
  {
    icon: '⚖️',
    title: 'Regulatory Alerts',
    description: 'Stay compliant with evolving Greek STR regulations.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-kerdo-slate">
          Unlock Your Property's Potential
        </h2>
        <p className="text-xl text-kerdo-light-text opacity-80">
          Discover the AI-powered tools designed to boost your income and streamline your operations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {featuresData.map((feature, index) => (
          <div key={index} className="bg-kerdo-slate bg-opacity-70 p-8 rounded-xl shadow-xl border border-kerdo-slate hover:border-kerdo-teal transition-all duration-300 ease-in-out transform hover:-translate-y-2">
            <div className="text-5xl mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-kerdo-beige">{feature.title}</h3>
            <p className="text-kerdo-light-text opacity-90 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
