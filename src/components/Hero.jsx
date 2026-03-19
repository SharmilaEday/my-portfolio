import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hero-greeting">Hi, I'm</span>
                    <h1 className="hero-name">Sharmila Eday</h1>
                    <h2 className="hero-title">
                        Artificial Intelligence Engineer <span className="separator">|</span> Generative AI Developer
                    </h2>
                    <p className="hero-tagline">
                        I build AI systems that ship from fine-tuned models to production pipelines, with measurable results
                    </p>
                    <p className="hero-description">
                        MS AI student at UNT (May 2026) and Graduate Research Assistant, building scalable LLM systems and Agentic AI. 
                        Previously recognized as a top 1% AI intern at Microsoft India.
                    </p>

                    <div className="hero-ctas">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="/my-portfolio/Sharmila_Eday_Resume.pdf"
                            className="btn btn-outline"
                            download
                        >
                        Download Resume <Download size={18} />
                        </a>
                        <a href="#contact" className="btn btn-text">
                            Contact Me
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://linkedin.com/in/sharmilaeday" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/SharmilaEday" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={24} />
                        </a>
                        <a href="mailto:sharmilaeday26@gmail.com" className="social-icon">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="hero-visual">
                <div className="hero-blob"></div>
                <div className="hero-card glass animate-float">
                    <div className="card-item">
                        <div className="icon-box ai"></div>
                        <div>
                            <p className="card-label">Generative AI</p>
                            <p className="card-value">LLMs & RAG</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="icon-box genai"></div>
                        <div>
                            <p className="card-label">Computer Vision</p>
                            <p className="card-value">Image & Detection</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="icon-box health"></div>
                        <div>
                            <p className="card-label">NLP</p>
                            <p className="card-value">Transformers and Model Fine-tuning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
