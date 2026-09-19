/**
 * Seed Script — Populates MongoDB with initial portfolio data
 *
 * Usage: node config/seed.js
 *
 * ⚠️  This will DELETE all existing data before seeding.
 * Make sure your MONGO_URI is set in the .env file.
 */

require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db');

const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Certification = require('../models/Certification');
const Admin = require('../models/Admin');

// ============================================================
// SEED DATA — Edit these with your real information
// ============================================================

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive full-stack portfolio website built with React, Node.js, Express, and MongoDB. Features dark/light mode, animated sections, admin dashboard, and contact form.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/kapilshah/portfolio',
    liveUrl: '#',
    featured: true,
    order: 1,
  },
  {
    title: 'College Library Management System',
    description:
      'A comprehensive library management system for tracking books, members, and borrowing records. Features search, filtering, overdue notifications, and admin panel.',
    technologies: ['Java', 'MySQL', 'JDBC', 'Swing'],
    githubUrl: 'https://github.com/kapilshah/library-management',
    liveUrl: '',
    featured: true,
    order: 2,
  },
  {
    title: 'College Canteen Website',
    description:
      'An online ordering platform for a college canteen with menu display, cart functionality, order tracking, and payment integration. Responsive design for mobile ordering.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/kapilshah/canteen-website',
    liveUrl: '',
    featured: true,
    order: 3,
  },
  {
    title: 'Networking & Linux Administration',
    description:
      'A project focused on network configuration, Linux server administration, firewall setup, and automated deployment scripts. Includes documentation for DHCP, DNS, and web server setup.',
    technologies: ['Linux', 'Bash', 'Networking', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/kapilshah/linux-admin',
    liveUrl: '',
    featured: false,
    order: 4,
  },
];

const skills = [
  // Programming
  { name: 'Java', category: 'Programming', level: 75, icon: 'java' },
  { name: 'Python', category: 'Programming', level: 70, icon: 'python' },
  { name: 'JavaScript', category: 'Programming', level: 80, icon: 'javascript' },

  // Web Development
  { name: 'HTML', category: 'Web Development', level: 90, icon: 'html5' },
  { name: 'CSS', category: 'Web Development', level: 85, icon: 'css3' },
  { name: 'React', category: 'Web Development', level: 75, icon: 'react' },
  { name: 'Node.js', category: 'Web Development', level: 70, icon: 'nodejs' },
  { name: 'Express.js', category: 'Web Development', level: 70, icon: 'express' },

  // Database
  { name: 'MySQL', category: 'Database', level: 70, icon: 'mysql' },
  { name: 'MongoDB', category: 'Database', level: 65, icon: 'mongodb' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps', level: 50, icon: 'aws' },
  { name: 'Linux', category: 'Cloud & DevOps', level: 65, icon: 'linux' },
  { name: 'Git', category: 'Cloud & DevOps', level: 75, icon: 'git' },
  { name: 'GitHub', category: 'Cloud & DevOps', level: 80, icon: 'github' },
  { name: 'Docker', category: 'Cloud & DevOps', level: 55, icon: 'docker' },

  // Data
  { name: 'R', category: 'Data', level: 50, icon: 'r' },
  { name: 'Pandas', category: 'Data', level: 55, icon: 'pandas' },
  { name: 'Data Analysis', category: 'Data', level: 60, icon: 'chart' },
];

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Tech Solutions Pvt. Ltd.',
    location: 'Remote',
    startDate: 'June 2025',
    endDate: 'August 2025',
    description:
      'Developed and maintained web applications using React and Node.js. Collaborated with the team on REST API design and database optimization. Participated in code reviews and agile sprints.',
    current: false,
    order: 1,
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    startDate: 'January 2025',
    endDate: 'Present',
    description:
      'Building websites and web applications for small businesses and startups. Specializing in responsive design, React frontends, and Node.js backends.',
    current: true,
    order: 2,
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Information Technology (BSc IT)',
    institution: 'Your College Name',
    university: 'Your University Name',
    startYear: '2023',
    endYear: '2026',
    description:
      'Studying core IT subjects including Data Structures, Algorithms, Database Management, Networking, Web Development, and Cloud Computing.',
    gpa: '8.5 / 10',
    order: 1,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Your School Name',
    university: 'State Board',
    startYear: '2021',
    endYear: '2023',
    description: 'Science stream with focus on Mathematics, Physics, and Computer Science.',
    gpa: '',
    order: 2,
  },
];

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    credentialUrl: '',
    description: 'Foundational cloud computing certification covering AWS services, architecture, pricing, and security.',
    type: 'Certification',
    order: 1,
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: '2024',
    credentialUrl: '',
    description: 'Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.',
    type: 'Course',
    order: 2,
  },
  {
    title: 'Java Programming Masterclass',
    issuer: 'Coursera',
    date: '2024',
    credentialUrl: '',
    description: 'In-depth Java programming course covering OOP, collections, multithreading, and JDBC.',
    type: 'Course',
    order: 3,
  },
  {
    title: 'Hackathon Winner — College Tech Fest',
    issuer: 'College Name',
    date: '2025',
    credentialUrl: '',
    description: 'Won first place in the 24-hour college hackathon for building an innovative web application.',
    type: 'Achievement',
    order: 4,
  },
];

// ============================================================
// SEED EXECUTION
// ============================================================

const seedDB = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Promise.all([
      Project.deleteMany(),
      Skill.deleteMany(),
      Experience.deleteMany(),
      Education.deleteMany(),
      Certification.deleteMany(),
    ]);
    console.log('🗑️  Existing data cleared');

    // Insert seed data
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    await Experience.insertMany(experiences);
    await Education.insertMany(education);
    await Certification.insertMany(certifications);

    // Create default admin if none exists
    const existingAdmin = await Admin.findOne();
    if (!existingAdmin) {
      await Admin.create({
        username: 'admin',
        password: 'admin123', // Change this immediately after first login!
      });
      console.log('👤 Default admin created (username: admin, password: admin123)');
    }

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
};

seedDB();
