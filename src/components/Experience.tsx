import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    title: "Senior Full Stack Developer",
    company: "Hira Dental Laboratory UK",
    date: "2023 - 2025",
    description: "As a Full Stack Web Developer, I have hands-on experience in building and managing both frontend and backend systems using technologies like React, Tailwind CSS, Node.js, Django and MongoDB. I focus on writing clean, efficient code and delivering scalable, user-friendly web applications.",
    skills: ["React", "Node.js", "Git", "Python", "MongoDB", "Tailwind CSS", "Restfull API's" ],
    type: "work"
  },
  {
    title: "Social Media Manager",
    company: "Hira Dental Laboratory UK",
    date: "2023 - 2025",
    description: "As a Social Media Manager, I have experience in creating and managing content strategies across various platforms to boost engagement, grow audience, and maintain brand presence. I focus on data-driven decisions, creative visuals, and consistent communication. Tools: Canva, Google Analytics, ChatGPT (for content ideas) Platforms: Instagram, FaceBook, LinkedIn, YouTube",
    skills: ["Social Media Strategy", "Audience Engagement", "Hashtag Research", "Post Scheduling & Planning", "Canva"],
    type: "work"
  },
  {
    title: "Graphic Designer",
    company: "Freelance",
    date: "2023 - 2025",
    description: "As a freelance Graphic Designer, I have created engaging visual content for various clients, specializing in social media posts, branding materials, and custom designs using tools like Canva, GIMP, and CorelDRAW.",
    skills: ["Banner Design", "Catalogue", "Animated Custom Invitation Cards", "Social Media Posts", "Logo Design"],
    type: "work"
  },
  {
    title: "Inter in Computer Science (I.C.S)",
    company: "Aspre Group of Colleges",
    date: "2021 - 2023",
    description: "Completed Intermediate (ICS) with Computer Science.",
    skills: [],
    type: "education"
  },
  {
    title: "Bachelor's in Computer Science ",
    company: "Lahore Garisson University",
    date: "2025 - Current",
    description: "Currently pursuing a Bachelor's degree in Computer Science.",
    skills: [],
    type: "education"
  }
];

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

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-800/50"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative"
          >
            {experienceData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      variants={item}
      className={`mb-8 flex items-center ${
        isEven ? "flex-row" : "flex-row-reverse"
      } md:flex-row-reverse md:even:flex-row`}
    >
      <div className="w-full md:w-1/2 md:px-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="card hover:border-primary-600/30 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-primary-900/50 text-primary-400">
              {item.type === "work" ? (
                <Briefcase size={20} />
              ) : (
                <GraduationCap size={20} />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-primary-400 mb-2">{item.company}</p>
              <p className="text-sm text-gray-400 mb-3">{item.date}</p>
              <p className="text-gray-300 mb-3">{item.description}</p>
              
              {item.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-primary-900/70 text-primary-200 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative flex justify-center items-center w-full md:w-1/2">
        <div className="absolute left-1/2 md:left-auto md:right-0 md:odd:left-0 md:odd:right-auto transform -translate-x-1/2 md:translate-x-1/2 md:odd:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary-600 bg-background-dark"></div>
      </div>
    </motion.div>
  );
};

export default Experience;