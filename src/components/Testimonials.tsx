import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    content: 'Working with DigitalCraft was a game-changer for our business. Their attention to detail and innovative approach helped us achieve our goals faster than expected.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EcoStore',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    content: 'The e-commerce solution they built for us exceeded our expectations. Sales have increased by 150% since launch.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Innovate AI',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: 'Their AI chatbot integration transformed our customer service. Response times are down 80% and customer satisfaction is at an all-time high.',
  }
];

export default function Testimonials() {
  return (
    <section className="min-h-screen py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Client Success Stories
          </h2>
          <p className="text-[#EAEAEA] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#2C2C2C] rounded-xl p-6 relative"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00FFCC] text-[#00FFCC]" />
                ))}
              </div>
              <p className="text-[#EAEAEA] mb-6">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#F5F5F5] font-semibold">{testimonial.name}</h4>
                  <p className="text-[#EAEAEA] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}