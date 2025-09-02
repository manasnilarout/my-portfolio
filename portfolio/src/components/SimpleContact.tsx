import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SimpleContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'me@manasranjan.dev',
      link: 'mailto:me@manasranjan.dev'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91-8093773107',
      link: 'tel:+918093773107'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: null
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/manasnilarout',
      link: 'https://linkedin.com/in/manasnilarout'
    }
  ];

  const socialLinks = [
    { icon: '🐙', name: 'GitHub', link: 'https://github.com/manasnilarout' },
    { icon: '💼', name: 'LinkedIn', link: 'https://linkedin.com/in/manasnilarout' },
    { icon: '📝', name: 'Medium', link: 'https://medium.com/@manasnilarout' },
    { icon: '🐦', name: 'Twitter', link: 'https://twitter.com/manasnilarout' }
  ];

  return (
    <section id="contact" style={{ 
      padding: '100px 20px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      background: 'linear-gradient(180deg, transparent, rgba(0, 217, 255, 0.03), transparent)'
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
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #00d9ff, #ff0080)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Let's Work Together
        </h2>
        
        <motion.p
          style={{ 
            fontSize: '1.2rem', 
            color: '#a0a0a0', 
            textAlign: 'center', 
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px auto',
            lineHeight: '1.6'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm always interested in new opportunities, challenging projects, and innovative ideas. 
          Let's connect and discuss how we can create something amazing together.
        </motion.p>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: 'white', 
              marginBottom: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>📬</span>
              <span>Get In Touch</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '20px',
                    backdropFilter: 'blur(20px)',
                    cursor: info.link ? 'pointer' : 'default',
                    transition: 'all 0.3s ease'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={info.link ? { 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    y: -5
                  } : undefined}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      fontSize: '1.5rem',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 217, 255, 0.1)',
                      borderRadius: '50%'
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ color: 'white', fontWeight: '600', marginBottom: '5px' }}>
                        {info.label}
                      </div>
                      <div style={{ color: '#a0a0a0', fontSize: '0.95rem' }}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{ 
                color: 'white', 
                fontSize: '1.2rem', 
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🌐</span>
                <span>Connect With Me</span>
              </h4>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 20px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '25px',
                      color: '#a0a0a0',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(0, 217, 255, 0.1)',
                      borderColor: '#00d9ff',
                      color: '#00d9ff'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '40px',
              backdropFilter: 'blur(20px)'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: 'white', 
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                Send Me a Message
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '10px',
                    padding: '15px',
                    marginBottom: '20px',
                    color: '#22c55e',
                    textAlign: 'center',
                    fontSize: '0.9rem'
                  }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <div className="contact-form-row" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ 
                    display: 'block', 
                    color: 'white', 
                    marginBottom: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00d9ff';
                      e.target.style.boxShadow = '0 0 0 2px rgba(0, 217, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ 
                    display: 'block', 
                    color: 'white', 
                    marginBottom: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00d9ff';
                      e.target.style.boxShadow = '0 0 0 2px rgba(0, 217, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  color: 'white', 
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00d9ff';
                    e.target.style.boxShadow = '0 0 0 2px rgba(0, 217, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{ 
                  display: 'block', 
                  color: 'white', 
                  marginBottom: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00d9ff';
                    e.target.style.boxShadow = '0 0 0 2px rgba(0, 217, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '15px',
                  background: isSubmitting 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'linear-gradient(135deg, #00d9ff, #7928ca)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
                whileHover={!isSubmitting ? { 
                  y: -2,
                  boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)'
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTop: '2px solid white',
                        borderRadius: '50%'
                      }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          style={{ 
            textAlign: 'center', 
            marginTop: '80px',
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 style={{ 
            fontSize: '1.5rem', 
            color: 'white', 
            marginBottom: '15px' 
          }}>
            Ready to Start a Project?
          </h3>
          <p style={{ 
            color: '#a0a0a0', 
            marginBottom: '25px',
            fontSize: '1.1rem',
            maxWidth: '500px',
            margin: '0 auto 25px auto'
          }}>
            Let's discuss your ideas and turn them into reality. I'm available for freelance projects and collaborations.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:me@manasranjan.dev"
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
              <span>📧</span>
              <span>Email Me</span>
            </a>
            <a
              href="https://linkedin.com/in/manasnilarout"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#00d9ff',
                padding: '12px 30px',
                border: '2px solid #00d9ff',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00d9ff';
                e.currentTarget.style.color = '#0a0a0a';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00d9ff';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SimpleContact;