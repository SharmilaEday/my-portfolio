import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send this to a service
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! This is a demo submission.');
    };

    return (
        <section className="contact" id="contact">
            <h2>Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-info glass">
                    <h3>Let's collaborate</h3>
                    <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

                    <div className="contact-methods">
                        <div className="method">
                            <Mail className="method-icon" size={24} />
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:SupriyaVeerla25@gmail.com">SupriyaVeerla25@gmail.com</a>
                            </div>
                        </div>
                        <div className="method">
                            <Linkedin className="method-icon" size={24} />
                            <div>
                                <h4>LinkedIn</h4>
                                <a href="https://linkedin.com/in/supriya-veerla" target="_blank" rel="noopener noreferrer">in/supriya-veerla</a>
                            </div>
                        </div>
                        <div className="method">
                            <Github className="method-icon" size={24} />
                            <div>
                                <h4>GitHub</h4>
                                <a href="https://github.com/mesupriya" target="_blank" rel="noopener noreferrer">github/mesupriya</a>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact-form glass" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="input-group">
                        <label>Message</label>
                        <textarea
                            placeholder="How can I help you?"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
