import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps { logoText: string };
const Header = ({logoText}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/img/smartbuildsolutions_logo.png"
              alt="Smart Build Solutions Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-brand-primary'
                    : 'text-brand-secondary hover:text-brand-primary'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0625227273"
              className="flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">062 522 7273</span>
            </a>
            <a
              href="https://wa.me/27625227273"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-accent transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-brand-secondary hover:text-brand-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium py-2 transition-colors ${
                      location.pathname === link.path
                        ? 'text-brand-primary'
                        : 'text-brand-secondary hover:text-brand-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                  <a
                    href="tel:0625227273"
                    className="flex items-center gap-2 text-brand-secondary"
                  >
                    <Phone size={18} />
                    <span className="text-sm">062 522 7273</span>
                  </a>
                  <a
                    href="https://wa.me/27625227273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-primary text-white px-6 py-3 rounded-lg font-medium text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;