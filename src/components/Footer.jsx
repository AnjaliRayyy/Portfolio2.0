import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" bg-blue-700 dark:bg-[#111111] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-slate-100 dark:text-blue-400">Anjali</h2>
          <p className="text-sm mt-1">Aspiring Full-Stack Developer</p>
        </div>

        {/* Navigation Links with anchor scroll
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div> */}

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/AnjaliRayyy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/anjali-ray-592200341/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/anjali_rayyy/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Instagram size={20} />
          </a>
          <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=rayyyanjali@gmail.com&tf=1" className="hover:text-blue-400 transition">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Anjali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
