import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyLDvj44FZB4sFv6F4_fAe80tZsKFemPouPJnMcUIp2UTX-fq-_qBzmeViQvKNzF5OjgQ/exec", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.result === 'success') {
            alert('Message sent! Check your Google Sheet and Email.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error("Error!", error.message);
        alert('There was an error sending your message.');
    }
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
                                <a href="mailto:sharmilaeday26@gmail.com">sharmilaeday26@gmail.com</a>
                            </div>
                        </div>
                        <div className="method">
                            <Linkedin className="method-icon" size={24} />
                            <div>
                                <h4>LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/sharmilaeday/" target="_blank" rel="noopener noreferrer">in/sharmila-eday</a>
                            </div>
                        </div>
                        <div className="method">
                            <Github className="method-icon" size={24} />
                            <div>
                                <h4>GitHub</h4>
                                <a href="https://github.com/SharmilaEday" target="_blank" rel="noopener noreferrer">github/SharmilaEday</a>
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
