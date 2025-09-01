import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled 
            ? 'rgba(10, 10, 10, 0.95)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled 
            ? '1px solid rgba(255, 255, 255, 0.1)' 
            : '1px solid transparent',
          transition: 'all 0.3s ease',
          padding: '15px 0'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <motion.div
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00d9ff, #ff0080)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            MN
          </motion.div>

          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ 
            display: 'flex', 
            gap: '30px', 
            alignItems: 'center'
          }}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeSection === item.id ? '#00d9ff' : '#a0a0a0',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  padding: '8px 16px',
                  borderRadius: '25px'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  color: '#00d9ff',
                  backgroundColor: 'rgba(0, 217, 255, 0.1)'
                }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      width: '20px',
                      height: '2px',
                      background: 'linear-gradient(135deg, #00d9ff, #7928ca)',
                      borderRadius: '1px',
                      transform: 'translateX(-50%)'
                    }}
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:me@manasranjan.dev"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #00d9ff, #7928ca)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>💬</span>
            <span>Hire Me</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '5px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(10, 10, 10, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeSection === item.id ? '#00d9ff' : 'white',
                  fontSize: '2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.a
              href="mailto:me@manasranjan.dev"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #00d9ff, #7928ca)',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginTop: '20px'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: navItems.length * 0.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>💬</span>
              <span>Hire Me</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #00d9ff, #7928ca)',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)'
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 15px 40px rgba(0, 217, 255, 0.4)'
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('home')}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default SimpleNavigation;