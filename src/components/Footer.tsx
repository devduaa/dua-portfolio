import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, CodeIcon, HeartIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background-dark border-t border-primary-900/50 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <CodeIcon className="text-primary-600" size={20} />
              <span className="text-xl font-semibold gradient-text">Dua Hameed</span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <HeartIcon className="text-primary-600 mx-1" size={16} /> and React
            </p>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-primary-900/30 rounded-full hover:bg-primary-800/50 transition-all duration-300 text-white"
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;