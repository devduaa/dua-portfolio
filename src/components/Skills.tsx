import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Server, PenTool, Smartphone } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Code size={24} />,
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 75 },
      { name: "JavaScript", level: 95 },
      { name: "Frammar Motion", level: 60 },
      { name: "HTML/CSS", level: 90 },
      
    ],
  },
  {
    category: "Graphic Design",
    icon: <Layout size={24} />,
    skills: [
      { name: "Banner Design", level: 90 },
      { name: "Logo Design", level: 80 },
      { name: "Animated Custom Invitation Cards ", level: 90 },
      { name: "Social Media Posts", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Python", level: 80 },
      { name: "Django", level: 85 },
    ],
  },
  {
    category: "Database",
    icon: <Database size={24} />,
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "My SQL", level: 85 },
  
    ],
  },
  {
    category: "Design Tools",
    icon: <PenTool size={24} />,
    skills: [
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "Canva", level: 90 },
      { name: "GIMP", level: 70 },
      { name: "CorelDRAW", level: 65 },
    ],
  },
  {
    category: "Linux Hosting and Management",
    icon: <Smartphone size={24} />,
    skills: [
      { name: "Web Hosting", level: 90 },
      { name: "DataBase Management", level: 80 },
      { name: "SSL", level: 85 },
      { name: "Git", level: 70 },
    ],
  },
];

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and performant web applications using modern frameworks and technologies.",
    icon: <Code size={24} />,
  },
  {
    title: "Database Management",
    description: "Managing, designing, and optimizing databases using MongoDB, MySQL, and other relational and non-relational systems.",
    icon: <Database size={24} />, // Add this icon if using lucide-react
  },
  {
    title: "Graphic Designing",
    description: "Designing engaging visuals, social media content, and branding materials using tools like Canva, GIMP, and CorelDRAW.",
    icon: <Smartphone size={24} />, // You can replace this with a more suitable icon like <Palette /> or <Brush />
  },
  {
    title: "API Development",
    description: "Designing and implementing RESTful and GraphQL APIs for web and mobile applications.",
    icon: <Server size={24} />,
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-background-light/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4">Skills & Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            My technical skills and professional services.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5 }}
              className="card hover:border-primary-600/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary-900/50 text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-background-dark rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-700 to-primary-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Services I Offer</h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="card hover:border-primary-600/30 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary-900/50 text-primary-400">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;