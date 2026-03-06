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

        // Your specific Google Apps Script URL
        const scriptUrl = "https://script.google.com/macros/s/AKfycbwkWnZov0swvKDrpOmwlQ9FQ_TAhyj0J63r72cppcNJeU3DIcpLAuNVr8KXHbY3_u5ShQ/exec";

        try {
            // We use 'no-cors' to bypass browser security blocks.
            // This means we cannot read the response from Google, but the data still arrives.
            await fetch(scriptUrl, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Since we are in 'no-cors' mode, we assume success if the fetch doesn't fail.
            alert('Thank you! Your message has been sent successfully.');
            
            // Clear the form fields
            setFormData({ name: '', email: '', message: '' });
            
        } catch (error) {
            console.error("Submission Error:", error);
            alert('There was a network error. Please try again or email me directly.');
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
