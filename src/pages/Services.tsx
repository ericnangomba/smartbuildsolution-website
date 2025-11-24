import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Home, Droplets, Grid3x3, Hammer, Wrench, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: 'Painting',
      description: 'Interior and exterior painting services using high-quality, durable paints. We provide color consultation and professional finishes that last.',
      features: [
        'Interior wall painting',
        'Exterior house painting',
        'Color consultation',
        'Surface preparation',
      ],
      image: '/img/Painting.jpg',
    },
    {
      icon: Home,
      title: 'Roofing & Waterproofing',
      description: 'Complete roofing solutions including repairs, sealing, and full replacements. Protect your home from Cape Town\'s weather.',
      features: [
        'Roof repairs and maintenance',
        'Waterproofing solutions',
        'Gutter installation',
        'Leak detection and repair',
      ],
      image: '/img/roofing-waterproofing.jpg',
    },
    {
      icon: Grid3x3,
      title: 'Tiling',
      description: 'Professional tiling services for kitchens, bathrooms, walls, and flooring. Quality installation with attention to detail.',
      features: [
        'Kitchen tiling',
        'Bathroom tiling',
        'Floor tiling',
        'Wall tiling',
      ],
      image: '/img/Tiling.jpg',
    },
    {
      icon: Hammer,
      title: 'Building & Paving',
      description: 'Construction services including extensions, small builds, and outdoor paving projects to enhance your property.',
      features: [
        'Home extensions',
        'Small building projects',
        'Outdoor paving',
        'Structural repairs',
      ],
      image: '/img/Paving.jpg',
    },
    {
      icon: Wrench,
      title: 'General Maintenance',
      description: 'Keep your home in top condition with our reliable maintenance services. We handle everything from minor fixes to routine upkeep.',
      features: [
        'Plumbing and electrical fixes',
        'Gutter cleaning',
        'Door and window repairs',
        'Minor repairs and touch-ups',
      ],
      image: '/img/maintenance_003.jpg',
    },
    {
      icon: Droplets,
      title: 'Irrigation',
      description: 'Efficient irrigation systems for gardens and lawns. We ensure optimal water distribution to keep your greenery thriving.',
      features: [
        'Garden irrigation systems',
        'Lawn sprinklers',
        'Drip irrigation setups',
        'Water-saving solutions',
      ],
      image: '/img/Irrigation Controller Setup.jfif',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/roof-waterproofing.jpg"
            alt="Roof waterproofing service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-secondary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Professional Renovations and Maintenance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Renovation Services Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            
            <p className="text-lg text-gray-600">
              Transform your space with our comprehensive renovation services. From small repairs to complete makeovers, we handle every project with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-brand-accent rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="/img/Maintenance.jpeg"
            alt="Maintenance service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-secondary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and personalized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get a Quote
                <ArrowRight size={20} />
              </Link>
            
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;