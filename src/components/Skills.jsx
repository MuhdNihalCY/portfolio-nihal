import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, onMouseEnter, onMouseLeave }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="border-2 border-[#a8dadc] p-4 text-center transform transition-all duration-300
             hover:border-[#f1faee] hover:text-[#f1faee] bg-[#1d3557]
             font-mono text-[#a8dadc] relative overflow-hidden"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {skill}
  </motion.div>
);

const Skills = ({ setCursorStyle }) => (
  <section className="py-20 px-8 bg-[#1d3557]">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-12 text-center text-[#a8dadc] font-mono"
    >
      SKILL MATRIX
    </motion.h2>
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        'JavaScript', 'React', 'Node.js', 'Python',
        'TypeScript', 'AWS', 'Docker', 'MongoDB',
        'GraphQL', 'Next.js', 'PostgreSQL', 'Git'
      ].map((skill) => (
        <SkillCard
          key={skill}
          skill={skill}
          onMouseEnter={() => setCursorStyle('pointer')}
          onMouseLeave={() => setCursorStyle('default')}
        />
      ))}
    </div>
  </section>
);

export default Skills;