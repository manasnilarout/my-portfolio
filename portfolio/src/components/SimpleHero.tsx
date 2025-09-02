import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { portfolioData } from '../data/portfolioData';
import '../styles/Hero.css';

const SimpleHero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        'Senior Software Engineer',
        'Full Stack Developer',
        'Microservices Architect',
        'API Integration Expert',
        'Cloud Solutions Builder'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="badge-text">Available for Opportunities</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
          </motion.h1>

          <motion.div 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span ref={typedRef}></span>
            <span className="typed-cursor">|</span>
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {portfolioData.personal.description}
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            className="hero-social"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
          >
            <a
              href="https://github.com/manasnilarout"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-text"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                color: '#00d9ff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span>🐙</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/manasnilarout"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-text"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                color: '#00d9ff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="social-link-text"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                color: '#00d9ff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span>✉️</span>
              <span>Email</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}
        >
          {/* Profile Picture */}
          <motion.div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid transparent',
              background: 'linear-gradient(135deg, #00d9ff, #7928ca, #ff0080)',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0, 217, 255, 0.3)'
            }}
          >
            <img
              src="/profile_n.jpg"
              alt="Manas Ranjan Nilorout"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                background: '#0a0a0a'
              }}
            />
          </motion.div>

          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <span className="window-title">portfolio.ts</span>
            </div>
            <div className="code-content">
              <pre>
                <code>{`const developer = {
  name: "Manas Ranjan Nilorout",
  role: "Senior Software Engineer",
  location: "Hyderabad, India",
  experience: "${new Date().getFullYear() - 2018}+ years",
  
  skills: {
    languages: ["TypeScript", "JavaScript", "Java", "Python"],
    frameworks: ["React", "Node.js", "Spring", "NestJS"],
    cloud: ["AWS", "Google Cloud"],
    passion: "Building scalable solutions"
  },
  
  currentFocus: "Integration Services @ UiPath",
  openTo: ["Challenging Projects", "Innovation", "Growth"]
};`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default SimpleHero;