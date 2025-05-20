import React from 'react';
import { Mail, Phone, MapPin, Github, BookOpen } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Let's Connect</h2>
        <div className="contact-info">
          <div className="contact-item">
            <Mail />
            <a href="mailto:didtn1233@gmail.com" className="contact-link">didtn1233@gmail.com</a>
          </div>
          <div className="contact-item">
            <Phone />
            <a href="tel:+82-010-9783-3446" className="contact-link">+82 010 9783 3446</a>
          </div>
          <div className="contact-item">
            <MapPin />
            <span className="contact-text">서울</span>
          </div>
          <div className="contact-item">
            <Github />
            <a href="https://github.com/softcoding03" target="_blank" rel="noopener noreferrer" className="contact-link">@softcoding03</a>
          </div>
          <div className="contact-item">
            <BookOpen />
            <a href="https://softpattern.tistory.com" target="_blank" rel="noopener noreferrer" className="contact-link">softpattern.tistory.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;