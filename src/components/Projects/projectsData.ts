// Correct imports with three levels up (../../../) to reach the assests folder
import EMS from '../../../assests/projects/EMS.png';
import ems1 from '../../../assests/projects/ems1.png';
import ems2 from '../../../assests/projects/ems2.png';
import ems3 from '../../../assests/projects/ems3.png';
import ems4 from '../../../assests/projects/ems4.png';

import DCP from '../../../assests/projects/DCP.jpeg';
import dcp1 from '../../../assests/projects/dcp1.png';
import dcp2 from '../../../assests/projects/dcp2.png';

import HDL from '../../../assests/projects/HDL.png';
import hdl1 from '../../../assests/projects/hdl1.png';
import hdl2 from '../../../assests/projects/hdl2.png';

import DDT from '../../../assests/projects/DDT.png';
import ddt1 from '../../../assests/projects/ddt1.png';

import linux from '../../../assests/projects/linux.jpg';
import lx1 from '../../../assests/projects/lx1.jpg';
import lx2 from '../../../assests/projects/lx2.jpg';

import OLC from '../../../assests/projects/Title page.png';
import catalogInside from '../../../assests/projects/Catalog Inside Page.png';
import olc1 from '../../../assests/projects/1.png';
import olc2 from '../../../assests/projects/2.png';
import olc3 from '../../../assests/projects/3.png';
import olc6 from '../../../assests/projects/6.png';
import lastPageArabic from '../../../assests/projects/Last Page Arabic.png';

export const projectsData = [
  {
    title: "HR Management",
    description: "HR Management System",
    fullDescription: "Integrated with the ZKTeco biometric device using a custom Python script for real-time attendance tracking, this system features separate panels for Admin, HR, Employee, and Accounts with role-based access. It combines Node.js and Python (Django) in the backend to manage payroll automation, provident fund tracking, leave applications, and department-wise announcements. The frontend is built with React for a smooth and responsive user experience. Hosted on a Linux server, the system is secure and scalable, with a database powered by MongoDB.",
    image: EMS,
    gallery: [ems1, ems2, ems3, ems4],
    technologies: ["React", "Node.js", "Django", "Mongo DB", 'Cron Job'],
    features: [
      "Real-time attendance tracking integrated with ZKTeco biometric device via custom Python script",
      "Role-based access with dedicated panels for Admin, HR, Employee, and Accounts",
      "Full-stack backend using Node.js and Python (Django) for seamless business logic and data management",
      "Payroll automation including salary calculation and tax deductions",
    ],
    github: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "DCP",
    description: "DCP Job Portal",
    fullDescription: "A responsive and user-friendly job portal developed using React, inspired by platforms like Rozee.pk. It allows employers to post and manage job listings and enables job seekers to search jobs by location, industry, and job type. The system includes secure user authentication, real-time notifications, and a centralized admin dashboard. Optimized for both desktop and mobile, the platform ensures a smooth experience for all users.",
    image: DCP,
    gallery: [dcp1, dcp2, DCP],
    technologies: ["React", "Tailwind CSS", "Django", "My SQL"],
    features: [
      "Employer and job seeker roles with role-based access",
      "Job search filters: location, industry, and type",
      "Secure login/signup with authentication",
    ],
    github: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Hira Dental Lab",
    description: "Hira Dental Laborartory",
    fullDescription: "A clean and responsive website developed using HTML, Bootstrap, and Django. The platform highlights company services with a modern, user-friendly interface to attract and engage visitors. Integrated with SMTP email functionality, allowing users to easily reach out via contact forms or service inquiries. The backend is powered by Django for smooth content management and email handling.",
    image: HDL,
    gallery: [hdl1, hdl2, HDL],
    technologies: ["HTML", "CSS", "Bootstrap5", "CSS Animations", 'Django'],
    features: [
      "SMTP-based email integration for inquiries",
      "Responsive design using Bootstrap",
      "Clean UI to showcase services effectively",
      "Django-powered backend for content and form handling",
    ],
    github: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Denture Repairs Coventry",
    description: "Denture Repairs Coventry",
    fullDescription: "Built a responsive and modern dental website using HTML, CSS, and JavaScript, focused on clean design and user-friendly experience. The site features detailed treatment pages, an interactive appointment booking system, and patient testimonials to enhance trust. JavaScript adds interactivity with service galleries, smooth navigation, and subtle animations.This project highlights my front-end development skills and ability to deliver functional, visually appealing websites",
    image: DDT,
    gallery: [ddt1, DDT],
    technologies: ["HTML", "CSS", "Javascript", "Django", "SMTP"],
    features: [
      "User-friendly form to book consultations online.",
      "Clean design with smooth transitions and consistent styling.",
    ],
    github: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Linux Server Management",
    description: "Linux Server Management",
    fullDescription: "Skilled in managing Linux servers with hands-on experience in deploying and maintaining full-stack applications. Capable of hosting projects built with React, HTML/CSS, Node.js, and Python. Proficient in configuring production environments, setting up user accounts with proper permissions, and keeping the server secure and up-to-date. Also experienced in Git integration for version control, enabling smooth deployment workflows and team collaboration.",
    image: linux,
    gallery: [linux, lx1, lx2],
    technologies: ["Apache", "SSL", "PM2", "Hosting", "Git"],
    features: [
      "Host and manage applications built with React, HTML, Node.js, and Python.",
      "Create and manage server users with proper role-based permissions.",
      "Regular updates, security patches, and performance monitoring",
      "Configure Apache, domains, SSL, and process managers (e.g., PM2)",
      "Seamless code deployment via Git for version control and team collaboration"
    ],
    github: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "OLC",
    description: "I designed a catalog for an Omani company, showcasing my work.",
    fullDescription: "A sleek music player with visualizations and playlist management capabilities. It features audio visualizations, playlist creation and management, and a sleek user interface. Built with React, the Web Audio API, and Firebase for user accounts.",
    image: OLC,
    gallery: [
      OLC,
      catalogInside,
      olc1,
      olc2,
      olc3,
      olc6,
      lastPageArabic
    ],
    technologies: ["React", "Web Audio API", "Firebase", "Styled Components"],
    features: [
      "Audio visualizations",
      "Playlist creation and management",
      "User accounts and favorites",
      "Dark mode interface",
      "Offline playback capability"
    ],
    github: "https://github.com",
    liveUrl: "https://example.com"
  }
];