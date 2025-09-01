import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 1,
      name: "Integration Services",
      company: "UiPath",
      description: "API Integration Platform to virtualize APIs into unified data models, eliminating brittle point-to-point connections",
      technologies: ["Node.js", "Java", "TypeScript", "Microservices", "Lambda", "DAG"],
      highlights: [
        "Built Autopilot - GenAI-powered code assistant",
        "Developed API Workflows for stateless script execution",
        "Implemented connector builder architecture"
      ],
      link: "https://www.uipath.com/"
    },
    {
      id: 2,
      name: "Caleido",
      company: "Osmosys",
      description: "IoT-based hotel management system providing room service booking and customer services through fingertip control",
      technologies: ["TypeScript", "Angular 9", "MySQL", "MQTT", "RabbitMQ", "ELK Stack"],
      highlights: [
        "Designed microservices architecture",
        "Implemented real-time IoT communication",
        "Set up comprehensive monitoring with ELK stack"
      ]
    },
    {
      id: 3,
      name: "GlowRadius",
      company: "Private",
      description: "B2B intent selling vendor that crawls digital footprints to gather business insights",
      technologies: ["Google Firestore", "Google AppEngine", "Node.js"],
      highlights: [
        "Led framework design and optimization",
        "Implemented microservice architecture",
        "Optimized for peak performance on cloud platforms"
      ],
      link: "https://www.glowradius.com/"
    },
    {
      id: 4,
      name: "Import.IO",
      company: "Osmosys",
      description: "Data extraction and transformation platform for business insights using AWS services",
      technologies: ["AWS Athena", "S3", "Lambda", "Redshift", "Node.js", "Python"],
      highlights: [
        "Built web extractors for data crawling",
        "Created data validation and filtering tools",
        "Implemented automated data delivery pipelines"
      ],
      link: "https://www.import.io/"
    },
    {
      id: 5,
      name: "Counterpick",
      company: "Osmosys",
      description: "Advanced team composition tool for League of Legends using custom weighting algorithms",
      technologies: ["Node.js", "Vue.js", "MariaDB", "NSQ", "Babel"],
      highlights: [
        "Created APIs for simulation operations",
        "Implemented GDPR compliance features",
        "Integrated RIOT API for real-time data"
      ],
      link: "https://counterpick.com/"
    },
    {
      id: 6,
      name: "Common API",
      company: "Osmosys",
      description: "Generic API service for PDF generation, image manipulation, and Excel processing",
      technologies: ["Adonis.js", "Node.js", "MySQL"],
      highlights: [
        "Built PDF generation from HTML/web pages",
        "Implemented image manipulation services",
        "Created Excel generation and processing tools"
      ]
    }
  ];

  const filters = ['all', 'UiPath', 'Osmosys', 'Private'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.company === filter);

  return (
    <section id="projects" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
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
          Featured Projects
        </h2>

        {/* Project Filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          marginBottom: '50px', 
          flexWrap: 'wrap' 
        }}>
          {filters.map((f) => (
            <motion.button
              key={f}
              style={{
                background: filter === f ? 'linear-gradient(135deg, #00d9ff, #7928ca)' : 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderColor: filter === f ? 'transparent' : 'rgba(255, 255, 255, 0.1)',
                color: filter === f ? 'white' : '#a0a0a0',
                padding: '10px 25px',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                if (filter !== f) {
                  e.currentTarget.style.borderColor = '#00d9ff';
                  e.currentTarget.style.color = '#00d9ff';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== f) {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#a0a0a0';
                }
              }}
            >
              {f === 'all' ? 'All Projects' : f}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '30px',
                  backdropFilter: 'blur(20px)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Header */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '20px' 
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #00d9ff, #7928ca)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    💻
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '35px',
                          height: '35px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          color: '#a0a0a0',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none'
                        }}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 217, 255, 0.1)';
                          e.currentTarget.style.borderColor = '#00d9ff';
                          e.currentTarget.style.color = '#00d9ff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.color = '#a0a0a0';
                        }}
                      >
                        🔗
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '5px' }}>
                  {project.name}
                </h3>
                <p style={{ color: '#00d9ff', fontSize: '0.9rem', fontWeight: '500', marginBottom: '15px' }}>
                  {project.company}
                </p>
                <p style={{ 
                  color: '#a0a0a0', 
                  lineHeight: '1.6', 
                  marginBottom: '20px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.description}
                </p>

                {/* Key Features */}
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ 
                    color: 'white', 
                    fontSize: '1rem', 
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    🚀 <span>Key Features</span>
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} style={{
                        position: 'relative',
                        paddingLeft: '20px',
                        marginBottom: '8px',
                        color: '#a0a0a0',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#00d9ff'
                        }}>
                          •
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: 'rgba(121, 40, 202, 0.1)',
                        border: '1px solid rgba(121, 40, 202, 0.3)',
                        color: 'white',
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '0.85rem'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span style={{
                      background: 'rgba(0, 217, 255, 0.1)',
                      border: '1px solid rgba(0, 217, 255, 0.3)',
                      color: '#00d9ff',
                      padding: '5px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem'
                    }}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 217, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600' }}>
                    View Details
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,
                padding: '20px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(20px)',
                  maxWidth: '800px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  padding: '40px',
                  position: 'relative'
                }}
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setSelectedProject(null)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 0, 128, 0.2)';
                    e.currentTarget.style.borderColor = '#ff0080';
                    e.currentTarget.style.transform = 'rotate(90deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'rotate(0deg)';
                  }}
                >
                  ×
                </button>
                
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <h2 style={{ 
                        fontSize: '2rem', 
                        marginBottom: '10px',
                        background: 'linear-gradient(135deg, #00d9ff, #ff0080)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {project.name}
                      </h2>
                      <p style={{ color: '#00d9ff', fontSize: '1.1rem', marginBottom: '20px' }}>
                        {project.company}
                      </p>
                      <p style={{ color: '#a0a0a0', lineHeight: '1.8', marginBottom: '30px' }}>
                        {project.description}
                      </p>
                      
                      <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '15px' }}>
                          Key Highlights
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} style={{
                              position: 'relative',
                              paddingLeft: '25px',
                              marginBottom: '12px',
                              color: '#a0a0a0',
                              lineHeight: '1.6'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: '0',
                                color: '#00d9ff',
                                fontWeight: 'bold'
                              }}>
                                ✓
                              </span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '15px' }}>
                          Technologies Used
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              style={{
                                background: 'rgba(121, 40, 202, 0.1)',
                                border: '1px solid rgba(121, 40, 202, 0.3)',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '15px',
                                fontSize: '0.95rem'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {project.link && (
                        <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              background: 'linear-gradient(135deg, #00d9ff, #7928ca)',
                              color: 'white',
                              padding: '12px 30px',
                              borderRadius: '50px',
                              textDecoration: 'none',
                              fontWeight: '600',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 217, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0px)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            🔗 <span>Visit Project</span>
                          </a>
                        </div>
                      )}
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default SimpleProjects;