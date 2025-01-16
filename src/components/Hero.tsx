import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-[#121212] relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#00FFCC] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#0066FF] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#FF4500] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] mb-6">
            Crafting Digital
            <span className="text-[#00FFCC]"> Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#EAEAEA] mb-8 max-w-2xl mx-auto">
            Transform your business with cutting-edge web design, AI solutions, and powerful branding that sets you apart.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-[#00FFCC] text-[#121212] px-8 py-3 rounded-lg hover:bg-[#0066FF] hover:text-white transition-all duration-300 flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-[#00FFCC] text-[#00FFCC] px-8 py-3 rounded-lg hover:bg-[#00FFCC] hover:text-[#121212] transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}