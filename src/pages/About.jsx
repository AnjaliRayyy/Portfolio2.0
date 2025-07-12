import { motion } from 'framer-motion';
import { GraduationCap, Award, Paintbrush } from 'lucide-react';
import aboutPic from '../images/aboutPic.jpg';
const About = () => {
  const timeline = [
    {
      year: '2024 – Present',
      title: 'B.Tech in Computer Science And Engineering',
      institution: 'Techno Main Salt Lake (TMSL)',
    },
    {
      year: '2022 – 2024',
      title: 'Higher Secondary (Class 11–12)',
      institution: 'ISC | K.E. Carmel School',
    },
    {
      year: '2011 – 2022',
      title: 'Schooling (Class 1–10)',
      institution: 'ICSE | K.E. Carmel School',
    },
  ];

  return (
    <>
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <motion.div
            className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutPic} // Replace with your image
              alt="Anjali"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="flex-1 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg">
              Hey! I’m <span className="font-semibold text-blue-600">Anjali</span> — a curious and creative developer on a mission to build intuitive, beautiful, and meaningful digital experiences. From competing in national hackathons to crafting  projects, I love blending code with purpose. Let’s create something impactful together!
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <GraduationCap className="text-blue-600 mt-1" />
                Second-year B.Tech student at TMSL, aspiring full-stack developer.
              </li>
              <li className="flex items-start gap-3">
                <Award className="text-blue-600 mt-1" />
                2X National Hackathon Finalist – passionate about solving real-world
                problems through code.
              </li>
              <li className="flex items-start gap-3">
                <Paintbrush className="text-blue-600 mt-1" />
                Creative soul — I enjoy painting, podcasts, and reading.
              </li>
            </ul>
          </motion.div>
        </div>

       {/* Timeline */}
     <motion.div
  className="mt-16"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-2xl font-semibold text-center mb-8">
    🎓 My Educational Journey
  </h3>

  <div className="relative ml-6">
    {/* Left vertical line */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded"></div>

    <div className="space-y-12">
      {timeline.map((item, index) => (
        <div key={index} className="relative flex items-start">
          {/* Dot on the line */}
          <div className="absolute -left-[0.4rem] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#0f172a] dark:border-[#0f172a]"></div>

          {/* Text content centered */}
          <div className="mx-auto text-center w-full md:w-[60%]">
            <h4 className="text-lg font-semibold text-slate-950 dark:text-white">
              {item.title}
            </h4>
            <p className="text-sm text-gray-400">{item.institution}</p>
            <span className="text-sm text-blue-400">{item.year}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.div>
      </div>
    </section>
    </>
  );
};

export default About;
