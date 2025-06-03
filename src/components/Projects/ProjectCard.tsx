import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-background-light border border-primary-900/50 hover:border-primary-600/50 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="text-xs bg-primary-900/70 text-primary-200 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={onClick}
              className="text-white bg-primary-600 hover:bg-primary-700 px-3 py-1.5 rounded text-sm flex items-center"
            >
              Details
              <ExternalLink size={14} className="ml-1" />
            </button>
            
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-400 p-1.5 rounded"
            >
              <Github size={20} />
            </a>
            
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-400 p-1.5 rounded"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Project name semi-circle on hover */}
      <motion.div
        className="absolute -right-20 top-4 bg-primary-900/80 px-4 py-2 rounded-l-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0"
        initial={{ x: 50 }}
        whileHover={{ x: 0 }}
      >
        <span className="text-sm font-medium">{project.title}</span>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;