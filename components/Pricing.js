// components/Pricing.js
import React from 'react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Basic',
      price: '€15/mo',
      description: '1–2 properties, dynamic pricing, basic forecasts, 1–2 OTA channels',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '€35/mo',
      description: '3–10 properties, advanced AI, listing optimization, multi-channel, priority support',
      highlight: true, // Most Popular
    },
    {
      name: 'Business',
      price: '€75/mo',
      description: '10+ properties, full suite, API access, custom reports, dedicated account manager',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-kerdo-slate">
          Flexible Plans to Fit Your Needs
        </h2>
        <p className="text-xl text-kerdo-light-text opacity-80">
          Choose the perfect plan to scale your short-term rental business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-xl shadow-xl border transition-all duration-300 ease-in-out ${tier.highlight
              ? 'border-kerdo-teal bg-kerdo-slate scale-105 bg-opacity-80'
              : 'bg-kerdo-slate bg-opacity-70 border-kerdo-slate hover:border-kerdo-teal hover:-translate-y-2'
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-0 right-0 bg-kerdo-teal text-kerdo-navy font-bold py-2 px-6 rounded-bl-lg rounded-tr-lg text-sm shadow-md">
                Most Popular
              </div>
            )}
            <h3 className={`text-3xl font-bold mb-4 ${tier.highlight ? 'text-kerdo-teal' : 'text-kerdo-beige'}`}>
              {tier.name}
            </h3>
            <div className="text-5xl font-bold mb-6 text-kerdo-light-text">
              {tier.price}
            </div>
            <p className="text-kerdo-light-text opacity-90 leading-relaxed mb-8">
              {tier.description}
            </p>
            <button
              className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg ${tier.highlight
                ? 'bg-kerdo-teal text-kerdo-navy hover:bg-teal-500'
                : 'bg-kerdo-light-text text-kerdo-slate hover:bg-kerdo-slate hover:text-kerdo-light-text border-2 border-kerdo-light-text'
              }`}
            >
              {tier.highlight ? 'Get Started' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
