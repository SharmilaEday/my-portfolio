import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="logo-text">SV.</span>
                    <p>© {new Date().getFullYear()} Sharmila Eday. All rights reserved.</p>
                </div>

                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/sharmilaeday/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    <a href="https://github.com/SharmilaEday" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href="sharmilaeday26@gmail.com"><Mail size={20} /></a>
                </div>

                <button className="scroll-up" onClick={scrollToTop}>
                    <ArrowUp size={24} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
