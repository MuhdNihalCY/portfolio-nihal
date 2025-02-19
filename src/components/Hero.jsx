import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ isVisible }) => (
  <section className="min-h-screen flex flex-col justify-center items-center  p-8 bg-[#1d3557]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold mb-4 text-[#f1faee] hover:scale-105 transition-transform">
        MUHAMMED NIHAL C Y
      </h1>
      <p className="text-xl text-[#a8dadc] mb-8">FULL STACK DEVELOPER</p>
      <div className="flex space-x-4 mb-12 justify-center">
        <a href="#" className="text-[#a8dadc] hover:text-[#f1faee] transition-colors transform hover:scale-110">
          <Github className="w-6 h-6" />
        </a>
        <a href="#" className="text-[#a8dadc] hover:text-[#f1faee] transition-colors transform hover:scale-110">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="text-[#a8dadc] hover:text-[#f1faee] transition-colors transform hover:scale-110">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </motion.div>
    <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 text-[#a8dadc]" />
  </section>
);

export default Hero;