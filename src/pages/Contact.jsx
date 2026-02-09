import React from 'react';
import './Contact.css';
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h2>Contact me</h2>

      <div className="contactLinks">
        {/* WhatsApp */}
        <a
          href="https://wa.me/554898295275?text=Olá%20Lucas!%20Vim%20pelo%20seu%20portfólio%20😄"
          target="_blank"
          rel="noopener noreferrer"
          className="contactBtn btn-whatsapp"
        >
          <FaWhatsapp className="iconOne" size={28} />
          Chamar no WhatsApp
        </a>

        {/* Email */}
        <a 
          href="mailto:lucasmaiadaluz12345@gmail.com" 
          className="contactBtn btn-email"
        >
          <MdEmail className="iconOne" size={28} /> 
          Enviar Email
        </a> 
      </div>
    </div>
  );
};

export default Contact;
