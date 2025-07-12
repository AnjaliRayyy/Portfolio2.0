import { useEffect, useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import weather from '../images/weather.avif';
import DsaCpp from '../images/DsaCpp.webp';
import portfolio from '../images/portfolio.png';
import DiscordBot from '../images/DiscordBot.jpeg';
import TicTacToe from '../images/TicTacToe.jpeg';
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio built using React and Tailwind CSS.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    image: portfolio,
    link: 'https://github.com/AnjaliRayyy/Portfolio2.0',
  },
  {
    title: 'Discord GPT Bot',
    description: 'A smart Discord bot that uses Node.js and OpenAI API.',
    tech: ['Node.js', 'Discord.js', 'OpenAI'],
    image: DiscordBot,
    link: 'https://github.com/AnjaliRayyy/DiscordBot',
  },
  {
    title: 'Weather App',
    description: 'Live weather forecast app with OpenWeather API.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: weather,
    link: 'https://github.com/AnjaliRayyy/WeatherApp',
  },
  {
    title: 'DSA with CPP',
    description: 'Insight into different concepts of Data Structures and Algorithms (DSA)',
    tech: ['DSA', 'CPP'],
    image: DsaCpp,
    link: 'https://github.com/AnjaliRayyy/DSA_withCPP',
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'A simple Tic-Tac-Toe Game',
    tech: ['HTML','CSS',"JS"],
    image: TicTacToe,
    link: 'http://github.com/AnjaliRayyy/Tic-Tac-Toe',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  const getIndices = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  const [prevIndex, centerIndex, nextIndex] = getIndices();

 const renderCard = (project, position) => {
  let baseStyle =
    'w-[90vw] sm:w-[90vw] md:w-[420px] h-[460px] rounded-xl overflow-hidden p-4 bg-blue-50 dark:bg-slate-800 border dark:border-slate-700 border-blue-200 transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl';

  // Responsive positioning logic
  if (position === 'center') {
    baseStyle += ' scale-100 z-30 opacity-100';
  } else if (position === 'left' || position === 'right') {
    // Hide side cards on small screens
    baseStyle += ' hidden md:block scale-95 z-20 opacity-80';
  }

  return (
    <motion.div
      key={project.title}
      className={baseStyle}
      layout
      transition={{ type: 'spring', stiffness: 100, damping: 18 }}
      whileHover={{ scale: 1.07 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
        {project.title}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-white text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-auto"
      >
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium">
          View Repo →
        </button>
      </a>
    </motion.div>
  );
};




  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>

        {/* Arrows */}
        <div className="flex justify-between items-center mb-8 px-6 md:px-16">
          <ArrowLeftCircle
            className="w-10 h-10 text-blue-600 cursor-pointer hover:scale-110 transition"
            onClick={prev}
          />
          <ArrowRightCircle
            className="w-10 h-10 text-blue-600 cursor-pointer hover:scale-110 transition"
            onClick={next}
          />
        </div>

        {/* Cards */}
        <div className="flex justify-center items-center gap-8">
          {renderCard(projects[prevIndex], 'left')}
          {renderCard(projects[centerIndex], 'center')}
          {renderCard(projects[nextIndex], 'right')}
        </div>
      </div>
    </section>
  );
};

export default Projects;
