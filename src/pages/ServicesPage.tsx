import React, { useState } from 'react';
import { Monitor, Bot, ShoppingBag, Palette, Check } from 'lucide-react';
import Header from '../components/Header';

const services = [
  {
    icon: Monitor,
    title: 'Landing Pages',
    description: 'High-converting landing pages that turn visitors into customers.',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Custom Animations'],
    tiers: [
      {
        name: 'Basic',
        price: '₹5,000',
        features: [
          'One-page design with a simple, clean layout',
          'Mobile-responsive',
          'Basic SEO',
          'Contact form',
          '1 revision'
        ]
      },
      {
        name: 'Premium',
        price: '₹10,000',
        features: [
          'Multi-section design',
          'Advanced SEO',
          'Third-party integrations',
          'Custom animations',
          '3 revisions'
        ]
      }
    ]
  },
  {
    icon: Bot,
    title: 'AI Assistants',
    description: 'Intelligent chatbots that provide 24/7 customer support.',
    features: ['24/7 Support', 'Custom Responses', 'API Integration', 'Analytics Dashboard'],
    tiers: [
      {
        name: 'Basic',
        price: '₹8,000',
        features: [
          'Predefined responses',
          'Basic API integration',
          'FAQ handling',
          'Basic analytics',
          '1 revision'
        ]
      },
      {
        name: 'Premium',
        price: '₹15,000',
        features: [
          'Custom AI actions',
          'Full API integration',
          'Live chat support',
          'Advanced analytics',
          '3 revisions'
        ]
      }
    ]
  },
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Comprehensive brand identity design that makes you stand out.',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Social Media Kit'],
    tiers: [
      {
        name: 'Logo Design Only',
        price: '₹3,000',
        features: [
          'Custom-designed logo with 3-4 concepts and revisions',
          'Logo variants for social media use',
          'Multiple formats (SVG, PNG, JPG, and black/white versions)',
          'Includes brand color palette and font pairings'
        ]
      },
      {
        name: 'Logo + Brand Guidelines',
        price: '₹8,000',
        features: [
          'Full logo design with multiple concepts and revisions',
          'Brand style guide (logo usage, colors, typography, spacing)',
          'Favicon and app icon versions',
          'Delivered in SVG, PNG, PDF formats'
        ]
      },
      {
        name: 'Invoice Template',
        price: '₹2,000',
        features: [
          'Custom-designed professional invoice template',
          'Includes branding elements (logo, contact details, payment terms)',
          'Delivered in PDF and editable formats (Word, Excel)',
          'Two revisions',
          'Additional templates for ₹500 each'
        ]
      },
      {
        name: 'Letterhead Design',
        price: '₹1,500',
        features: [
          'Custom-designed letterhead with logo and tagline',
          'Delivered in PDF, Word, and Google Docs formats',
          'Two revisions'
        ]
      },
      {
        name: 'Letterhead + Envelope Design',
        price: '₹3,000',
        features: [
          'Matching letterhead and envelope design for print',
          'Delivered in print-ready PDF format',
          'Two rounds of revisions'
        ]
      },
      {
        name: 'Basic Brand Package',
        price: '₹5,000',
        features: [
          'Logo design (1 concept + 1 revision)',
          'Invoice template design (basic)',
          'Letterhead design (basic)',
          'Delivered in various formats'
        ]
      },
      {
        name: 'Complete Brand Package',
        price: '₹12,000',
        features: [
          'Full logo design (multiple concepts + 3 revisions)',
          'Premium invoice template design',
          'Premium letterhead design',
          'Brand guidelines (logo usage, color palette, fonts)',
          'Delivered in multiple formats'
        ]
      }
    ]
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Custom online stores with seamless shopping experiences.',
    features: ['Secure Payments', 'Inventory Management', 'Mobile Commerce', 'Analytics Integration'],
    comingSoon: true,
    tiers: [
      {
        name: 'Basic',
        price: '₹12,000',
        features: [
          'Up to 100 products',
          'Basic payment gateway',
          'Product management',
          'Order tracking',
          'Basic analytics'
        ]
      },
      {
        name: 'Premium',
        price: '₹25,000',
        features: [
          'Unlimited products',
          'Multiple payment gateways',
          'Advanced inventory',
          'CRM integration',
          'Advanced analytics'
        ]
      }
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Package Deals',
    description: 'Save more with bundled services tailored to your needs.',
    features: ['Custom Bundles', 'Discounted Prices', 'All-in-One Solutions'],
    comingSoon: true,
    tiers: [
      {
        name: 'Landing Page + Branding',
        price: '₹15,000',
        features: [
          'Premium Landing Page Design',
          'Basic Branding Package'
        ]
      },
      {
        name: 'E-commerce + Branding',
        price: '₹35,000',
        features: [
          'Multiple Product E-Commerce Store',
          'Complete Brand Package'
        ]
      },
      {
        name: 'All-in-One Package',
        price: '₹50,000',
        features: [
          'Premium Landing Page Design',
          'Multiple Product E-Commerce Store',
          'Complete Brand Package'
        ]
      }
    ]
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-[#121212] min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-[#F5F5F5] mb-16">
            Services
          </h1>

          {/* Service Navigation */}
          <div className="flex flex-wrap gap-2 mb-16">
            {services.map((service) => (
              <button
                key={service.title}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedService.title === service.title
                    ? 'text-[#00FFCC] border-b-2 border-[#00FFCC]'
                    : 'text-[#EAEAEA] hover:text-[#00FFCC]'
                }`}
              >
                {service.title}
                {service.comingSoon && (
                  <span className="ml-2 text-xs text-[#FF9800]">(Coming Soon)</span>
                )}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <selectedService.icon className="w-6 h-6 text-[#00FFCC] mb-4" />
                <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2">{selectedService.title}</h2>
                <p className="text-[#EAEAEA]">{selectedService.description}</p>
              </div>

              {selectedService.comingSoon ? (
                <div className="mt-8">
                  <p className="text-lg font-semibold text-[#FF9800]">
                    Coming Soon! 🚀
                  </p>
                  <p className="text-[#EAEAEA] mt-2">
                    We're working hard to bring {selectedService.title} to you. Stay tuned!
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#00FFCC] mb-4">Features</h3>
                  <div className="space-y-2">
                    {selectedService.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-[#EAEAEA] text-sm">
                        <Check className="w-4 h-4 text-[#00FFCC]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing Tiers */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {selectedService.comingSoon ? (
                <div className="col-span-2 text-center">
                  <p className="text-lg font-semibold text-[#FF9800] mb-4">
                    Pricing information is not available yet.
                  </p>
                  <p className="text-[#EAEAEA]">
                    {selectedService.title} services are coming soon. Stay tuned for updates!
                  </p>
                </div>
              ) : (
                selectedService.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="bg-[#1E2A47] p-6 border border-[#2C2C2C]"
                  >
                    <div className="mb-6">
                      <div className="text-sm text-[#EAEAEA] mb-1">
                        {tier.name}
                      </div>
                      <div className="text-3xl font-bold text-[#F5F5F5]">
                        {tier.price}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3 text-[#EAEAEA] text-sm">
                          <Check className="w-4 h-4 text-[#00FFCC] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-transparent border border-[#00FFCC] text-[#00FFCC] py-2 text-sm hover:bg-[#00FFCC] hover:text-[#121212] transition-colors">
                      Select {tier.name}
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}