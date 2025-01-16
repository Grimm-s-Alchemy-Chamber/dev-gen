import React from 'react';
import { Monitor, Bot, ShoppingBag, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Monitor,
    title: 'Landing Pages',
    description: 'Convert visitors into customers with high-performance landing pages.',
  },
  {
    icon: Bot,
    title: 'AI Assistants',
    description: 'Enhance customer support with intelligent chatbots.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Build your online store with secure payment processing.',
  },
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Create a memorable brand identity that stands out.',
  }
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 bg-[#1E2A47]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Our Services
          </h2>
          <p className="text-[#EAEAEA] max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#2C2C2C]/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-[#2C2C2C] transition-all duration-300 border border-[#00FFCC]/10 hover:border-[#00FFCC]/30"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00FFCC]/10 to-[#00FFCC]/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-[#00FFCC]" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">{service.title}</h3>
              <p className="text-[#EAEAEA] mb-6">{service.description}</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-[#00FFCC] hover:text-white transition-colors group-hover:translate-x-2 duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}