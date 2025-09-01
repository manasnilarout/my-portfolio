import React from 'react';
import { motion } from 'framer-motion';

const SimpleExperience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: "UiPath Robotics",
      position: "Senior Software Engineer",
      location: "Hyderabad, Telangana, India",
      duration: "March 2021 - Present",
      description: "Working on Integration Services - an API Integration Platform to virtualize APIs into unified data models",
      responsibilities: [
        "Code Owner for Autopilot - GenAI-powered assistant for code suggestions and connector construction",
        "Code Owner for API Workflows - stateless DAG architecture for executing user scripts in lambda",
        "Started multiple initiatives to automate engineering chores and improve productivity",
        "SME for formulas/studio web stack operating as DAG for process automation",
        "Contributing features and optimizations to Java/Node.js monolith codebase"
      ]
    },
    {
      id: 2,
      company: "Osmosys Software Solutions",
      position: "Software Engineer", 
      location: "Hyderabad, Telangana, India",
      duration: "Jan 2018 - Feb 2021",
      description: "Worked on multiple client projects involving IoT, microservices, and data processing",
      responsibilities: [
        "Led Caleido project - IoT-based hotel management system",
        "Developed microservices using TypeScript, Angular, MySQL, MQTT, RabbitMQ",
        "Set up ELK stack for monitoring and logging",
        "Conducted code reviews and mentored team members",
        "Optimized performance across multiple projects"
      ]
    }
  ];

  const achievements = [
    {
      title: "Garuda Award",
      organization: "Osmosys Software Solutions",
      year: "2019",
      description: "Award for extraordinary performance throughout the year"
    },
    {
      title: "Pegasus Award", 
      organization: "Osmosys Software Solutions",
      year: "2020",
      description: "Recognition for consistent quality, commitment, and leadership"
    },
    {
      title: "Summit Award",
      organization: "UiPath",
      year: "2024",
      description: "For adding Copilot capabilities to current custom code development process and reducing the time taken by 60%"
    },
    {
      title: "IIT Kharagpur (Kshitij)",
      organization: "IIT Kharagpur",
      description: "Participated and won in multiple events"
    }
  ];

  return (
    <section id="experience" style={{ 
      padding: '100px 20px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      background: 'linear-gradient(180deg, transparent, rgba(121, 40, 202, 0.05), transparent)'
    }}>
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
          WebkitTextFillColor: 'transparent'
        }}>
          Experience
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', padding: '40px 0' }}>
          {/* Timeline Line */}
          <motion.div 
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              width: '2px',
              height: '100%',
              background: 'linear-gradient(135deg, #00d9ff, #7928ca)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)'
            }}
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              style={{
                position: 'relative',
                marginBottom: '60px',
                width: '50%',
                paddingRight: index % 2 === 0 ? '40px' : '0',
                paddingLeft: index % 2 === 0 ? '0' : '40px',
                marginLeft: index % 2 === 0 ? '0' : '50%',
                textAlign: index % 2 === 0 ? 'right' : 'left'
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.3 }}
            >
              {/* Timeline Dot */}
              <motion.div
                style={{
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  background: 'linear-gradient(135deg, #00d9ff, #7928ca)',
                  borderRadius: '50%',
                  top: '20px',
                  right: index % 2 === 0 ? '-10px' : 'auto',
                  left: index % 2 === 0 ? 'auto' : '-10px',
                  boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)',
                  cursor: 'pointer',
                  zIndex: 2
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.3 }}
                whileHover={{ scale: 1.3 }}
              />
              
              {/* Experience Card */}
              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '30px',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#00d9ff', marginBottom: '10px' }}>
                    {exp.position}
                  </h3>
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: 'white', 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    <span>🏢</span>
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  marginBottom: '20px', 
                  flexWrap: 'wrap',
                  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a0a0a0', fontSize: '0.9rem' }}>
                    <span>📅</span>
                    <span>{exp.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a0a0a0', fontSize: '0.9rem' }}>
                    <span>📍</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p style={{ color: '#a0a0a0', lineHeight: '1.6', marginBottom: '20px' }}>
                  {exp.description}
                </p>

                <div>
                  <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '15px' }}>
                    Key Responsibilities:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        style={{
                          position: 'relative',
                          paddingLeft: index % 2 === 0 ? '0' : '25px',
                          paddingRight: index % 2 === 0 ? '25px' : '0',
                          marginBottom: '10px',
                          color: '#a0a0a0',
                          lineHeight: '1.6'
                        }}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.3 + idx * 0.1 }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: index % 2 === 0 ? 'auto' : '0',
                          right: index % 2 === 0 ? '0' : 'auto',
                          color: '#00d9ff',
                          fontSize: '1.2rem'
                        }}>
                          ▸
                        </span>
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          style={{ marginTop: '80px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 style={{ 
            fontSize: '1.8rem', 
            color: 'white', 
            marginBottom: '40px', 
            textAlign: 'center' 
          }}>
            Awards & Achievements
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '25px' 
          }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '25px',
                  textAlign: 'center',
                  backdropFilter: 'blur(20px)',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏆</div>
                <h4 style={{ color: '#00d9ff', fontSize: '1.1rem', marginBottom: '10px' }}>
                  {achievement.title}
                </h4>
                <p style={{ color: 'white', fontWeight: '500', marginBottom: '5px' }}>
                  {achievement.organization}
                </p>
                {achievement.year && (
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(0, 217, 255, 0.1)',
                    color: '#00d9ff',
                    padding: '3px 10px',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    marginBottom: '10px'
                  }}>
                    {achievement.year}
                  </span>
                )}
                <p style={{ 
                  color: '#a0a0a0', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.5', 
                  marginTop: '10px' 
                }}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SimpleExperience;