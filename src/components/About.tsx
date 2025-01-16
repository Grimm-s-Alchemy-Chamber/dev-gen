import React from 'react';
import { Award, Users, Clock, Zap } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '50+',
    label: 'Projects Completed',
  },
  {
    icon: Users,
    value: '30+',
    label: 'Happy Clients',
  },
  {
    icon: Clock,
    value: '5+',
    label: 'Years Experience',
  },
  {
    icon: Zap,
    value: '100%',
    label: 'Client Satisfaction',
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-[#1E2A47]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              About Us
            </h2>
            <p className="text-[#EAEAEA] mb-8">
              We're a team of passionate designers and developers dedicated to crafting exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00FFCC] mb-4">
                  <stat.icon className="w-6 h-6 text-[#121212]" />
                </div>
                <div className="text-2xl font-bold text-[#F5F5F5] mb-1">{stat.value}</div>
                <div className="text-[#EAEAEA]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">Our Mission</h3>
              <p className="text-[#EAEAEA] mb-6">
                To empower businesses with cutting-edge digital solutions that drive growth and create meaningful connections with their audience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-[#EAEAEA]">
                  <span className="w-1.5 h-1.5 bg-[#00FFCC] rounded-full mr-2"></span>
                  User-Centered Design Approach
                </li>
                <li className="flex items-center text-[#EAEAEA]">
                  <span className="w-1.5 h-1.5 bg-[#00FFCC] rounded-full mr-2"></span>
                  Innovation-Driven Solutions
                </li>
                <li className="flex items-center text-[#EAEAEA]">
                  <span className="w-1.5 h-1.5 bg-[#00FFCC] rounded-full mr-2"></span>
                  Quality-First Development
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">Our Process</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#00FFCC] font-semibold mb-2">1. Discovery</h4>
                  <p className="text-[#EAEAEA]">Understanding your business goals and target audience.</p>
                </div>
                <div>
                  <h4 className="text-[#00FFCC] font-semibold mb-2">2. Strategy</h4>
                  <p className="text-[#EAEAEA]">Developing a tailored plan to achieve your objectives.</p>
                </div>
                <div>
                  <h4 className="text-[#00FFCC] font-semibold mb-2">3. Creation</h4>
                  <p className="text-[#EAEAEA]">Bringing your vision to life with precision and creativity.</p>
                </div>
                <div>
                  <h4 className="text-[#00FFCC] font-semibold mb-2">4. Launch & Support</h4>
                  <p className="text-[#EAEAEA]">Ensuring smooth deployment and ongoing maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}