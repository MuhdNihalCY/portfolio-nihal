import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onMouseEnter, onMouseLeave }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    className="bg-[#1d3557] border-2 border-[#a8dadc] p-6"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="bg-[#457b9d] h-48 mb-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d3557] opacity-50"></div>
      <div className="absolute bottom-2 left-2 font-mono text-[#a8dadc]">PROJECT_{project}.exe</div>
    </div>
    <h3 className="text-xl font-bold mb-2 font-mono text-[#a8dadc]">Project {project}</h3>
    <p className="text-[#f1faee] mb-4 font-mono">
      A beautiful and responsive web application built with React and Node.js.
    </p>
    <div className="flex flex-wrap gap-2">
      {['React', 'Node.js', 'MongoDB'].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-[#457b9d] text-[#f1faee] font-mono text-sm border border-[#a8dadc] 
                   hover:bg-[#1d3557] transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = ({ setCursorStyle }) => (
  <section className="py-20 px-8 bg-[#457b9d] border-t-4 border-b-4 border-[#a8dadc]">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-12 text-center text-[#f1faee] font-mono"
    >
      &lt;Featured_Projects/&gt;
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[1, 2, 3].map((project) => (
        <ProjectCard
          key={project}
          project={project}
          onMouseEnter={() => setCursorStyle('pointer')}
          onMouseLeave={() => setCursorStyle('default')}
        />
      ))}
    </div>
  </section>
);

export default Projects;