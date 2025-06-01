import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (name === 'email' && value) {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value) ? '' : 'Please enter a valid email'
      }));
    } else if (name === 'name' && value) {
      setErrors(prev => ({
        ...prev,
        name: value.length < 2 ? 'Name must be at least 2 characters' : ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        'service_bmr5rfs',
        'template_on83zcv',
        form.current,
        'xYxoRB-8XkhNj3Mfo'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <div className="container" id="contact">
   <div className="photo">
    <img src={process.env.PUBLIC_URL + '/images/fffff.jpeg'} alt="raunak" />
   </div>
   <div className="form-container">
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        {submitStatus.message && (
          <div className={`submit-status ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}

        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            required
          />
          <label htmlFor="name">Name</label>
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            required
          />
          <label htmlFor="email">Email</label>
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="subject">Subject</label>
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
        </div>

        <button type="submit" className={isSubmitting ? 'submitting' : ''}>
          {isSubmitting ? (
            <span className="spinner"></span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
   </div>
  );
};

export default Form;
