import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-brand-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <span className="font-bold text-white text-lg leading-tight">
              Smart Build <span className="text-brand-primary">Solutions</span>
            </span>
            <p className="text-gray-300 text-sm mt-4">
              Your trusted partner in home improvement and maintenance services across Cape Town.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@smartbuildsolutions.co.za"
                className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">info@smartbuildsolutions.co.za</span>
              </a>
              <a
                href="tel:0625227273"
                className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">062 522 7273 | 067 113 8117</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} />
                <span className="text-sm">Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Redesigned Footer Layout */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Smart Build Solutions | Designed by{' '}
              <a
                href="https://jertinetech.42web.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-accent transition-colors"
              >
                Jertine Tech
              </a>
            </p>
            <a
              href="https://wa.me/27625227273"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-brand-accent text-white w-12 h-12 rounded-full hover:bg-brand-primary transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;