import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';
import '../styles/About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    { title: 'Languages', items: portfolioData.skills.languages, icon: '💻' },
    { title: 'Frontend', items: portfolioData.skills.frontend, icon: '🎨' },
    { title: 'Backend', items: portfolioData.skills.backend, icon: '⚙️' },
    { title: 'Databases', items: portfolioData.skills.databases, icon: '🗄️' },
    { title: 'Tools', items: portfolioData.skills.tools, icon: '🛠️' },
    { title: 'Services', items: portfolioData.skills.services, icon: '☁️' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title gradient-text" variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <h3>Building the Future, One Line at a Time</h3>
            <p>
              With over {new Date().getFullYear() - 2018} years of experience in software engineering,
              I specialize in building scalable, production-grade applications and microservices.
              Currently working as a Senior Software Engineer at UiPath, I'm passionate about
              creating elegant solutions to complex problems.
            </p>
            <p>
              My expertise spans from developing GenAI-powered assistants to architecting
              distributed systems. I believe in writing clean, maintainable code and automating
              mundane tasks to boost productivity.
            </p>
            <div className="about-stats">
              <motion.div
                className="stat-card glass-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4>{new Date().getFullYear() - 2018}+</h4>
                <span>Years Experience</span>
              </motion.div>
              <motion.div
                className="stat-card glass-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4>10+</h4>
                <span>Major Projects</span>
              </motion.div>
              <motion.div
                className="stat-card glass-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4>20+</h4>
                <span>Technologies</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div className="skills-section" variants={itemVariants}>
          <h3 className="skills-title">Technical Expertise</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="skill-category glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h4>{category.title}</h4>
                </div>
                <div className="skill-tags">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="concepts-section" variants={itemVariants}>
          <h3 className="concepts-title">Core Concepts</h3>
          <div className="concepts-grid">
            {portfolioData.skills.concepts.map((concept, index) => (
              <motion.div
                key={concept}
                className="concept-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <span className="concept-text">{concept}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;