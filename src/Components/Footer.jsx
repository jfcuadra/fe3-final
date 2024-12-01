// src/Components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Powered by</p>
      <img src="/img/DH.png" alt="DH-logo" className="footer-logo" />
      <div className="footer-icons">
        <img src="/img/ico-facebook.png" alt="Facebook" className="footer-icon" />
        <img src="/img/ico-instagram.png" alt="Instagram" className="footer-icon" />
        <img src="/img/ico-whatsapp.png" alt="WhatsApp" className="footer-icon" />
        <img src="/img/ico-tiktok.png" alt="TikTok" className="footer-icon" />
      </div>
    </footer>
  );
};

export default Footer;
