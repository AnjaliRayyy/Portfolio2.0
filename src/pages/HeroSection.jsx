import { motion } from "framer-motion";
import { ArrowDownToLine, Eye } from "lucide-react";
import profilePic from "../images/profilePic.jpg";
import blueBg from "../images/blueBg.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover pointer-events-none"
          src={blueBg}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative z-10 max-w-6xl px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left flex-1  text-white p-6 rounded-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-50 dark:text-white mb-4">
            Hi, I'm <span className="text-white">Anjali</span>
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-300 mb-6">
            A Front-End Developer crafting clean and responsive web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              <Eye size={18} /> View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1lAUgP0EqpuyuuV54cqmIUGYH8clRN7nz/view?usp=sharing"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition"
            >
              <ArrowDownToLine size={18} /> Resume
            </a>
          </div>
        </motion.div>

        {/* Image or Illustration */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-500"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Replace with your image path or illustration */}
          {/* Replace with your image path or illustration */}
          <img
            src={profilePic}
            alt="Anjali illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
