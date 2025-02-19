import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ job, onMouseEnter, onMouseLeave }) => (
  <motion.div
    whileHover={{ x: 8 }}
    className="border-2 border-[#a8dadc] p-6 bg-[#1d3557]"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="text-[#a8dadc] mb-2">&gt; {job.role}.exe</div>
    <div className="text-[#f1faee] mb-1">
      company: {job.company}
      <br />
      duration: {job.period}
    </div>
    <div className="text-[#a8dadc] mt-2 pl-4 border-l-2 border-[#a8dadc]">
      {job.description}
    </div>
  </motion.div>
);

const Experience = ({ setCursorStyle }) => (
  <section className="py-20 px-8 bg-[#457b9d] font-mono">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-12 text-center text-[#f1faee]"
    >
      C:\EXPERIENCE&gt;_
    </motion.h2>
    <div className="max-w-3xl mx-auto space-y-8">
      {[
        {
          role: 'Senior Software Engineer',
          company: 'Tech Corp',
          period: '2022 - Present',
          description: 'Led development of scalable microservices architecture.'
        },
        {
          role: 'Software Engineer',
          company: 'StartupCo',
          period: '2020 - 2022',
          description: 'Developed and maintained full-stack web applications.'
        },
        {
          role: 'Junior Developer',
          company: 'DevShop',
          period: '2018 - 2020',
          description: 'Collaborated on various client projects using modern web technologies.'
        }
      ].map((job, index) => (
        <ExperienceCard
          key={index}
          job={job}
          onMouseEnter={() => setCursorStyle('pointer')}
          onMouseLeave={() => setCursorStyle('default')}
        />
      ))}
    </div>
  </section>
);

export default Experience;