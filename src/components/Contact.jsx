import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ setCursorStyle }) => (
  <section className="py-20 px-8 bg-[#1d3557]">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-12 text-center text-[#a8dadc] font-mono"
    >
      INSERT COIN TO CONTACT
    </motion.h2>
    <div className="max-w-xl mx-auto text-center">
      <p className="text-[#f1faee] mb-8 font-mono animate-pulse">
        READY PLAYER 1 - PRESS START TO BEGIN
      </p>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="mailto:john@example.com"
        className="inline-block bg-[#457b9d] text-[#f1faee] px-8 py-3 font-mono border-2 border-[#a8dadc]
                 shadow-lg shadow-[#457b9d]/50"
        onMouseEnter={() => setCursorStyle('pointer')}
        onMouseLeave={() => setCursorStyle('default')}
      >
        &gt; START &lt;
      </motion.a>
    </div>
  </section>
);

export default Contact;