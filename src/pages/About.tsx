import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every project is handled with precision and care. We never compromise on the quality of our work, integrity and workmanship.',
    },
    {
      icon: Heart,
      title: 'Customer Trust',
      description: 'We prioritize honesty and transparency in all our dealings, building lasting relationships with our clients.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We combine modern building practices with timeless craftsmanship to deliver innovative solutions.',
    },
  ];

  const reasons = [
    'Local Expertise: Based in Cape Town, we understand the local building requirements and climate considerations.',
    'Comprehensive Services: From minor repairs to complete renovations',
    'Reliable Team: Our experienced professionals are committed to delivering on time and within budget.',
    'Quality Materials: We source only the best materials to ensure long-lasting results.',
    'Customer Satisfaction: Your satisfaction is our priority, and we stand behind our work.',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/Renovations.png"
            alt="Renovations background"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200">
              Your trusted partner in home improvement and maintenance services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-brand-secondary mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Smart Build Solutions is a Cape Town–based company providing high-quality renovations and maintenance services. We combine traditional craftsmanship with modern building practices to deliver exceptional results that transform houses into true homes.
              </p>
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 p-6 rounded-xl border-l-4 border-brand-primary">
                <h3 className="text-xl font-bold text-brand-secondary mb-3">Our Mission</h3>
                <p className="text-gray-700 italic">
                  "To deliver reliable home improvement services and maintenance that transform houses into true homes."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                  alt="Construction team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/chooseus.jpeg"
                  alt="Quality work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-brand-secondary mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-brand-accent flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="/img/Renovations.png" 
            alt="Renovations" 
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your renovation or furniture needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;