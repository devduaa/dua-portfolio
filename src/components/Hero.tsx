import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Download } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    const stars = [];
    const starCount = Math.floor(window.innerWidth * window.innerHeight / 10000);

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        twinkleSpeed: 0.001 + Math.random() * 0.015,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.opacity += star.twinkleSpeed * star.twinkleDirection;

        if (star.opacity <= 0.1 || star.opacity >= 1) {
          star.twinkleDirection *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/projects/Dua_Hameed_Resume.pdf";
    link.download = "Dua_Hameed_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center section">
      <div className="absolute inset-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: 'transparent' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-start justify-center max-w-3xl">
          <motion.p
            className="text-primary-400 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, my name is
          </motion.p>

          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Dua Hameed</span>
            <span className="gradient-text">Creative Developer</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a passionate developer skilled in building responsive and user-friendly websites using React, Node.js, and Django. I love turning ideas into real, functional web applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <ExternalLink className="ml-2" size={18} />
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>

            <button
              onClick={handleDownload}
              className="btn-outline flex items-center"
            >
              Download CV
              <Download className="ml-2" size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a href="#about" className="text-white/60 hover:text-white">
          <ChevronDown size={30} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
