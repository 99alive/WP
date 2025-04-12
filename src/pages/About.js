import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Hey, I’m Mike.

I’m an incoming freshman at Morehouse College with a passion for tech and how it can actually make life better for people. Back in high school, I co-founded Africa Loves Science to make science more fun, hands-on, and accessible for kids in rural communities. That’s where I first saw how powerful learning can be when it feels real and relevant.

During my gap year, I explored everything that sparked my curiosity — from neuroscience and artificial intelligence to Python, C++, AI safety, and Effective Altruism. I also joined programs like Stanford’s Code in Place, and found myself falling deeper in love with the possibilities of tech.
      </motion.p>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        These days, I’m diving into web development — learning React, working with JavaScript, and exploring full-stack tools like Node.js, MongoDB, and Figma. I’m focused on building things that matter — not just cool-looking projects, but tools that actually help someone.

I’m still figuring it all out, but I’m always learning, always building, always dreaming.
If you're working on something meaningful — or just want to swap ideas — let’s connect.
      </motion.p>
    </section>
  );
}

export default About;