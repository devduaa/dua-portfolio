import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-background-light border border-primary-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="aspect-video">
              <img
                src={project.gallery[currentImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            {/* Image Navigation */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevImage}
                className="p-1 bg-black/50 backdrop-blur-sm rounded-r-lg text-white ml-2 hover:bg-primary-900/80 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextImage}
                className="p-1 bg-black/50 backdrop-blur-sm rounded-l-lg text-white mr-2 hover:bg-primary-900/80 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Gallery Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-primary-500' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-1.5 rounded-full text-white hover:text-primary-400 transition-colors"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 p-1"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 p-1"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-primary-900/70 text-primary-200 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 mb-6">{project.fullDescription}</p>
            
            <div className="border-t border-gray-800 pt-4">
              <h4 className="text-lg font-medium mb-2">Project Features</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;