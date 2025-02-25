'use client';

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Linkedin, Mail, ArrowDown, Github, FileUser } from 'lucide-react';
import About from './About';
import Experience from './Experience';
import Skill from './Skills';
import Educations from './Educations';
import React from 'react';
import Resume from '../Resume.pdf'
import Contact from './Contact';


export default function Example() {

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi There!{' '}
          <span role="img" aria-label="wave">
            👋🏻
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          I'M{' '}
          <span className="text-purple-400">
            UMA SAMBATH KUMAR
          </span>
        </h2>
        <div className="text-xl md:text-2xl font-semibold text-purple-300 mb-8">
          <Typewriter
            options={{
              strings: ['FULL STACK DEVELOPER', 'DEVOPS ENGINEER', 'BACKEND DEVELOPER', 'FRONTEND DEVELOPER'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="flex space-x-4 mb-8">
          <a
            href="https://github.com/umasambath"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition duration-300"
            aria-label="GitHub Profile"

          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/umasambathkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href={Resume}
            download="Resume.pdf"
            className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition duration-300"
            aria-label="Download File"
          >
            <FileUser className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:umasambath1998@gmail.com"
            className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition duration-300"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Sections */}
      <About />
      <Experience />
      <Skill />
      <Educations />
      <Contact/>
    </div>
  );
}
