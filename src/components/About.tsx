import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, PenTool, Lightbulb, Camera } from "lucide-react";
import codingImg from "../../assests/projects/coding.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 to-background-dark border-2 border-primary-700/30">
                <img
                  src={codingImg}
                  alt="Profile"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600/20 rounded-full backdrop-blur-xl border border-primary-600/40 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-600/20 rounded-full backdrop-blur-xl border border-primary-600/40 z-0"></div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={item} className="text-2xl mb-4 gradient-text">
              Creative Developer & Designer
            </motion.h3>

            <motion.p variants={item} className="text-gray-300 mb-6">
              I'm a full-stack developer with 3 years of experience in creating
              modern, responsive, and user-friendly websites. I love blending
              creativity with code to build meaningful digital experiences.
            </motion.p>

            <motion.p variants={item} className="text-gray-300 mb-8">
              I work with React, Node.js, Express, MongoDB, and MySQL. I’m also
              skilled in graphic design (GIMP, Canva, Photoshop, CorelDRAW),
              SEO, and video editing — offering complete web and branding
              solutions.
            </motion.p>

            <motion.div variants={container} className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code size={20} />, text: "Web Development" },
                { icon: <PenTool size={20} />, text: "Graphic Design" },
                { icon: <Globe size={20} />, text: "Responsive Design" },
                { icon: <Camera size={20} />, text: "Video Editing" },
                { icon: <Lightbulb size={20} />, text: "SEO Mangement" },
                { icon: <Lightbulb size={20} />, text: "Creative Solutions" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="text-primary-400">{skill.icon}</span>
                  <span>{skill.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
