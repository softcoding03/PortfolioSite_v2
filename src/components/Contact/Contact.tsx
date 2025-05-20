import React from 'react';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Let's Connect</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i data-lucide="mail"></i>
            <a href="mailto:didtn1233@gmail.com" className="contact-link">
              didtn1233@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <i data-lucide="phone"></i>
            <a href="tel:+82-010-9783-3446" className="contact-link">
              +82 010 9783 3446
            </a>
          </div>
          <div className="contact-item">
            <i data-lucide="map-pin"></i>
            <span className="contact-text">서울</span>
          </div>
          <div className="contact-item">
            <i data-lucide="github"></i>
            <a
              href="https://github.com/softcoding03"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              @softcoding03
            </a>
          </div>
          <div className="contact-item">
            <i data-lucide="book-open"></i>
            <a
              href="https://softpattern.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              softpattern.tistory.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 