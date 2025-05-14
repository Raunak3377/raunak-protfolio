import React from 'react';
import './WhatsAppButton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WhatsAppButton = () => {
  const phoneNumber = '917766828618';
  const message = 'Hi, I seen your portfolio lets talk';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton; 