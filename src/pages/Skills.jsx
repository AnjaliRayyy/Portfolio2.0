import { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const techSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Bootstrap', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'MongoDB', level: 70 },
    { name: 'C', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'Github', level: 70 },
  ];

  const nonTechSkills = [
    { name: 'Leadership', level: 85 },
    { name: 'Communication', level: 90 },
    { name: 'Logical Reasoning', level: 88 }
  ];

  const SkillCard = ({ name, level }) => (
    <motion.div
      className="w-full bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border border-blue-100 dark:border-slate-700"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-base font-medium text-blue-700 dark:text-blue-300">{name}</h4>
        <span className="text-sm text-blue-500 dark:text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-blue-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border ${
              activeTab === 'tech'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-transparent text-blue-600 border-blue-300 hover:bg-blue-50 dark:hover:bg-slate-700'
            }`}
          >
            Tech Skills
          </button>
          <button
            onClick={() => setActiveTab('non-tech')}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border ${
              activeTab === 'non-tech'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-transparent text-blue-600 border-blue-300 hover:bg-blue-50 dark:hover:bg-slate-700'
            }`}
          >
            Non-Tech Skills
          </button>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(activeTab === 'tech' ? techSkills : nonTechSkills).map((skill, index) => (
            <SkillCard key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
