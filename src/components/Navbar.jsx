import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['Home', 'About', 'Skills','Projects', 'Contact'];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-blue-600 shadow-md dark:bg-[#111111] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-100 dark:text-blue-600">
          Anjali<span className="text-gray-800 dark:text-white">Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-slate-50 dark:text-gray-100">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-300 dark:hover:text-blue-600 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1VpouAC5aXq_QYBp1uEfDESRyzxNManwl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-4 py-2 bg-slate-900 dark:bg-blue-600 text-white rounded-xl hover:bg-slate-700 dark:hover:bg-blue-700 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden bg-white dark:bg-slate-900 px-4 pb-4 space-y-3 text-gray-700 dark:text-gray-100"
        >
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block w-full py-2 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
            >
              Resume
            </a>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
