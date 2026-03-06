import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Graduate Research Assistant - Generative AI",
            org: "University of North Texas",
            location: "USA",
            period: "September 2025 - Present",
            responsibilities: [
                "Developing and fine-tuning of LLM-based chat bots using RAG for embedding-based search and custom applications.",
                "Implementing end-to-end AI pipelines, including data collection, processing, training, evaluation, and automation on GCP."
            ]
        },
        {
            title: "Graduate Teaching Assistant",
            org: "University of North Texas",
            location: "USA",
            period: "August 2025 - Present",
            responsibilities: [
                "Created teaching materials on Generative AI techniques such as diffusion models.",
                "Designed automation workflows using n8n and make, integrating LLM APIs to demonstrate real-world AI applications."
            ]
        },
        {
            title: "Artificial Intelligence Intern",
            org: "Verzeo— Microsoft India",
            location: "Hyderabad, India",
            period: "September 2020 - December 2020",
            responsibilities: [
                "Developed a Face Mask Detection system with 95% accuracy, enhancing real-time compliance monitoring.",
                "Built a Traffic Signal Classification model, achieving 98% accuracy, optimizing automated traffic management."
            ]
        }
    ];

    return (
        <section className="experience" id="experience">
            <h2>Professional Experience</h2>
            <div className="exp-container">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="exp-card glass">
                        <div className="exp-side">
                            <span className="exp-period">{exp.period}</span>
                            <p className="exp-location">{exp.location}</p>
                        </div>
                        <div className="exp-main">
                            <h3 className="exp-title">{exp.title}</h3>
                            <p className="exp-org">{exp.org}</p>
                            <ul className="exp-list">
                                {exp.responsibilities.map((item, iIdx) => (
                                    <li key={iIdx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
