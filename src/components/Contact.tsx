import React from 'react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              Let's Work Together
            </h2>
            <p className="text-[#EAEAEA]">
              Ready to start your project? Get in touch with us today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-[#2C2C2C] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#00FFCC]" />
                </div>
                <div>
                  <h3 className="text-[#F5F5F5] font-semibold">Email</h3>
                  <p className="text-[#EAEAEA]">contact@digitalcraft.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-[#2C2C2C] p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-[#00FFCC]" />
                </div>
                <div>
                  <h3 className="text-[#F5F5F5] font-semibold">Live Chat</h3>
                  <p className="text-[#EAEAEA]">Available 9am - 5pm EST</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#2C2C2C] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#00FFCC]" />
                </div>
                <div>
                  <h3 className="text-[#F5F5F5] font-semibold">Phone</h3>
                  <p className="text-[#EAEAEA]">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#2C2C2C] text-[#EAEAEA] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FFCC]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#2C2C2C] text-[#EAEAEA] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FFCC]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-[#2C2C2C] text-[#EAEAEA] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FFCC]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00FFCC] text-[#121212] py-3 rounded-lg hover:bg-[#0066FF] hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}