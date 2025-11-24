import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    { title: 'House Exterior – Black Brick', subtitle: 'Before landscaping', image: '/img/House Exterior – Black Brick.jfif' },
    { title: 'Poolside Paving – Phase 1', subtitle: 'Hardscape layout', image: '/img/Poolside Paving – Phase 1.jfif' },
    { title: 'Poolside Paving – Phase 2', subtitle: 'Circular feature', image: '/img/Poolside Paving – Phase 2.jfif' },
    { title: 'Poolside Paving – Phase 3', subtitle: 'Walkway alignment', image: '/img/Poolside Paving – Phase 3.jfif' },
    { title: 'Curved Garden Retaining Wall', subtitle: 'Masonry detail', image: '/img/Curved Garden Retaining Wall.jfif' },
    { title: 'Outdoor Braai & Seating', subtitle: 'Concrete finish', image: '/img/Outdoor Braai & Seating.jfif' },
    { title: 'Boundary Wall – House 32', subtitle: 'Front yard privacy', image: '/img/Boundary Wall – House 32.jfif' },
    { title: 'Roof Trusses & Insulation', subtitle: 'Structural works', image: '/img/Roof Trusses & Insulation.jfif' },
    { title: 'Room Extension – Aluminium Door', subtitle: 'Exterior finishing', image: '/img/Room Extension – Aluminium Door.jfif' },
    { title: 'Bathroom Plumbing Rough-in', subtitle: 'Waste and supply lines prepared', image: '/img/Bathroom Plumbing Rough-in.jfif' },
    { title: 'Underground Drainage Installation', subtitle: 'PVC pipe trenching and junctions', image: '/img/Underground Drainage Installation.jfif' },
    { title: 'Exterior Drain & Vent Stacks', subtitle: 'Soil and vent piping at building side', image: '/img/Exterior Drain & Vent Stacks.jfif' },
    { title: 'Water Filtration & Pump System', subtitle: 'Filtration, pump and storage setup', image: '/img/Water Filtration & Pump System.jfif' },
    { title: 'Drain Replacement & Floor Gully', subtitle: 'Excavation and foul water connection', image: '/img/Drain Replacement & Floor Gully.jfif' },
    { title: 'Garden Sprinkler Line', subtitle: 'Pop-up sprinklers along flower beds', image: '/img/Garden Sprinkler Line.jfif' },
    { title: 'Irrigation Valve Manifold', subtitle: 'Solenoid valves and wiring', image: '/img/Irrigation Valve Manifold.jfif' },
    { title: 'Ground Drainage Manifold', subtitle: 'Multiple branch connections installed', image: '/img/Ground Drainage Manifold.jfif' },
    { title: 'Bathroom Basin Installation', subtitle: 'Twin countertop basins and mixers', image: '/img/Bathroom Basin Installation.jfif' },
    { title: 'Multi-zone Valve Manifold', subtitle: 'Solenoid valves for multiple zones', image: '/img/Multi-zone Valve Manifold.jfif' },
    { title: 'Irrigation Controller Setup', subtitle: 'Rain Bird ESP-TM2 with WiFi module', image: '/img/Irrigation Controller Setup.jfif' },
    { title: 'Lawn Spray Heads', subtitle: 'Residential coverage tuning', image: '/img/Lawn Spray Heads.jfif' },
    { title: 'Lawn Edge Irrigation', subtitle: 'Sprayers along the sidewalk', image: '/img/Lawn Edge Irrigation.jfif' },
    { title: 'Valve Box Repair', subtitle: 'Electrical and valve maintenance', image: '/img/Valve Box Repair.jfif' },
    { title: 'Garden Bed Landscaping', subtitle: 'Stone mulch and seasonal plants', image: '/img/Garden Bed Landscaping.jfif' },
    { title: 'Park Sprinkler Line', subtitle: 'Wide area lawn irrigation', image: '/img/Park Sprinkler Line.jfif' },
    { title: 'Residential Lawn Irrigation', subtitle: 'Corner coverage with pop-ups', image: '/img/Residential Lawn Irrigation.jfif' },
    { title: 'Pathway Landscaping', subtitle: 'Symmetrical planting along walkway', image: '/img/Pathway Landscaping.jfif' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-secondary to-brand-secondary/90 text-white overflow-hidden">
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
          className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-200">
              Explore our portfolio of completed renovations and construction projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 via-brand-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brand-secondary mb-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1">{project.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-brand-primary transition-colors"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[selectedImage].image}
                alt={projects[selectedImage].title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {projects[selectedImage].title}
                </h3>
                <p className="text-gray-300">{projects[selectedImage].subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;