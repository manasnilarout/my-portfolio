import React from 'react';
import { motion } from 'framer-motion';

const SimpleAbout: React.FC = () => {
  const skills = {
    languages: ["Node.js", "JavaScript", "TypeScript", "Java", "Python", "..."],
    frontend: ["React.js", "Bootstrap", "Semantic UI", "Angular 9", "..."],
    backend: ["Express.js", "Adonis.js", "Nest.js", "Spring", "..."],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firestore", "AWS Athena", "..."],
    tools: ["Git", "VS Code", "IntelliJ", "Docker", "DBeaver", "..."],
    services: ["AWS", "Google Cloud", "RabbitMQ", "MQTT", "ELK Stack", "Twilio", "..."]
  };

  const stats = [
    { number: "7+", label: "Years Experience" },
    { number: "10+", label: "Major Projects" },
    { number: "4", label: "Company Awards" },
    { number: "20+", label: "Technologies" }
  ];

  return (
    <section id="about" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          marginBottom: '50px',
          background: 'linear-gradient(135deg, #00d9ff, #ff0080)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative'
        }}>
          About Me
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '20px' }}>
              Building the Future, One Line at a Time
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#a0a0a0', lineHeight: '1.8', marginBottom: '20px' }}>
              With over 7 years of experience in software engineering, I specialize in building scalable, 
              production-grade applications and microservices. Currently working as a Senior Software 
              Engineer at UiPath, I'm passionate about creating elegant solutions to complex problems.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#a0a0a0', lineHeight: '1.8', marginBottom: '30px' }}>
              My expertise spans from developing GenAI-powered assistants to architecting distributed 
              systems. I believe in writing clean, maintainable code and automating mundane tasks to 
              boost productivity.
            </p>
            
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '20px',
                    textAlign: 'center',
                    backdropFilter: 'blur(20px)'
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <h4 style={{ fontSize: '2rem', color: '#00d9ff', margin: '0 0 10px 0', fontWeight: '700' }}>
                    {stat.number}
                  </h4>
                  <span style={{ color: '#a0a0a0', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '30px' }}>Technical Expertise</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '20px',
                    backdropFilter: 'blur(20px)'
                  }}
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <h4 style={{ 
                    color: '#00d9ff', 
                    fontSize: '1.1rem', 
                    marginBottom: '15px',
                    textTransform: 'capitalize',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>
                      {category === 'languages' && '💻'}
                      {category === 'frontend' && '🎨'}
                      {category === 'backend' && '⚙️'}
                      {category === 'databases' && '🗄️'}
                      {category === 'tools' && '🛠️'}
                      {category === 'services' && '☁️'}
                    </span>
                    {category}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          background: 'rgba(0, 217, 255, 0.1)',
                          border: '1px solid rgba(0, 217, 255, 0.3)',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: 'white',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 217, 255, 0.2)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 217, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateY(0px)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SimpleAbout;