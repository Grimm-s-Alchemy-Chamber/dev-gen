import React from 'react';
import { Menu, X, Code2, Palette, ShoppingBag, Bot } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-[#121212]/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-[#00FFCC]" />
            <span className="text-[#F5F5F5] text-xl font-bold">DigitalCraft</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#EAEAEA] hover:text-[#00FFCC] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-[#00FFCC] text-[#121212] px-6 py-2 rounded-lg hover:bg-[#0066FF] hover:text-white transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#EAEAEA]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-[#EAEAEA] hover:text-[#00FFCC]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-[#00FFCC] text-[#121212] px-6 py-2 rounded-lg hover:bg-[#0066FF] hover:text-white transition-colors duration-300">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}