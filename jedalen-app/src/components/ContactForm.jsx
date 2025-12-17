import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="contact-form-container">
        <div className="contact-form-success">
          <div className="success-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="32" fill="#4CAF50"/>
              <path d="M20 32L28 40L44 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="success-title">Žiadosť bola odoslaná.</h2>
          <p className="success-text">
            Ďakujeme za váš dotaz. Budeme vás kontaktovať v priebehu nasledujúceho pracovného dňa.
          </p>
          <button 
            className="submit-button"
            onClick={() => setSubmitted(false)}
          >
            Odoslať novú správu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <div className="form-header">
        <h2 className="form-title">Rýchly kontakt</h2>
        <p className="form-subtitle">Máte otázku? Napíšte nám správu.</p>
      </div>
      
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Meno a priezvisko</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Vaše meno..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="vas@email.sk"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Predmet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Téma správy..."
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Správa</label>
            <textarea
              id="message"
              name="message"
              placeholder="Napíšte vašu správu..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            Odoslať správu
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
