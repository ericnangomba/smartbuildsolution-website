import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Award, Users, ArrowRight, Hammer, Paintbrush, Wrench } from 'lucide-react';

const Index = () => {
  const features = [
    { icon: CheckCircle2, text: 'Free consultation' },
    { icon: Clock, text: 'On-time delivery' },
    { icon: Award, text: 'Quality guarantee' },
  ];

  const services = [
    {
      title: 'Complete Renovations',
      description: 'Transform your space with painting, tiling, roofing, waterproofing, and structural work handled by pros.',
      features: ['Kitchen & Bathroom Remodeling', 'Painting & Waterproofing', 'Tiling & Flooring'],
      icon: Hammer,
      image: '/img/Complete-renovation.webp',
      link: '/services',
    },
    {
      title: 'Full-Service Package',
      description: 'All-in-one: design consultation, complete renovation, and maintenance.',
      features: ['Design Consultation', 'Complete Renovation', 'Maintenance'],
      icon: Paintbrush,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      link: '/services',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Expert Craftsmanship',
      description: '15+ years of experience with a proven track record across renovations and Maintenance.',
      icon: Award,
    },
    {
      title: 'Quality Guarantee',
      description: 'We stand behind our work with reliable materials and careful execution.',
      icon: CheckCircle2,
    },
    {
      title: 'On-Time Delivery',
      description: 'Projects completed on schedule with clear updates throughout.',
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/95 via-brand-secondary/85 to-brand-secondary/75 z-10" />
          <img
            src="/img/Construction.gif"
            alt="Construction background gif"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transform your home with{' '}
                <span className="text-brand-primary">Smart Build</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Renovations, paving and maintenance — on time and on budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
                >
                  <feature.icon className="text-brand-accent" size={24} />
                  <span className="text-white font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-accent transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <service.icon className="text-brand-primary mb-2" size={40} />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="text-brand-accent" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors group"
                  >
                    Learn More
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Built on Trust, Driven by Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local Cape Town expertise, transparent communication, and quality results – every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-brand-primary transition-all duration-300 hover:shadow-xl group"
              >
                <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="/img/home-reno.jpg"
            alt="Home renovation tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-secondary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Custom Quote
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;