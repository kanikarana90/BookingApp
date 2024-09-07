import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import './Whatsapp.css'; // Import the CSS file for styling

const WhatsAppButton = () => {
  const phoneNumber = '+971585617707'; // Replace with your phone number
  const message = 'Hello! I need some help regarding the booking '; // Default message

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp size={24} />
      
    </button>
  );
};

export default WhatsAppButton;
