import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Modern E-commerce',
    category: 'E-commerce Store',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    description: 'A fully responsive e-commerce platform with advanced filtering and secure checkout.',
  },
  {
    title: 'Tech Landing Page',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'High-converting SaaS landing page with modern animations and clear CTAs.',
  },
  {
    title: 'AI Assistant Dashboard',
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    description: 'Custom AI chatbot interface with analytics dashboard.',
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800',
    description: 'Complete brand identity package including logo, guidelines, and marketing materials.',
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Our Work
          </h2>
          <p className="text-[#EAEAEA] max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-[#2C2C2C]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="space-y-2">
                    <span className="text-[#00FFCC] text-sm">{project.category}</span>
                    <h3 className="text-xl font-bold text-[#F5F5F5]">{project.title}</h3>
                    <p className="text-[#EAEAEA] text-sm">{project.description}</p>
                    <button className="flex items-center space-x-2 text-[#00FFCC] hover:text-white transition-colors">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}