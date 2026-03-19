import React from 'react';
import { GraduationCap, Briefcase, Award, Flame } from 'lucide-react';
import './About.css';

const About = () => {
    const education = [
        {
            degree: "Master of Science in Artificial Intelligence",
            school: "University of North Texas",
            location: "USA",
            period: "May 2026",
            details: "GPA: 4.00/4.00. Focus: NLP, GenAI, MLOps, Big Data, Computer Vision."
        },
        {
            degree: "Bachelor of Technology in Electronics and Communication Engineering",
            school: "Jawaharlal Nehru Technological University",
            location: "India",
            period: "May 2024",
            details: "Focus: Data Structures and Algorithms, Probability Fundamentals, Statistics."
        }
    ];

    const interests = [
        'Generative AI', 'LLM Agent Architectures', 'RAG Systems',
        'Computer Vision', 'Cloud MLOps', 'Predictive Analytics'
    ];

    return (
        <section className="about" id="about">
            <h2>Professional Background</h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        I'm an AI Engineer and Generative AI Developer completing my MS in Artificial Intelligence at the University of North Texas (GPA: 4.0, May 2026). 
                        As a Graduate Research Assistant, I build and deploy LLM-based systems on GCP turning research into production-ready AI.
                    </p>
                    <p>
                        My experience spans fine-tuning large language models, building computer vision pipelines, and deploying scalable ML systems on GCP and AWS. 
                        Previously recognized as a top 1% AI intern at Microsoft India, I'm comfortable working across the full stack, from model development to cloud deployment.
                    </p>

                    <div className="interests">
                        <h3>Focus Areas</h3>
                        <div className="interest-tags">
                            {interests.map(item => (
                                <span key={item} className="tag">
                                    <Flame size={14} /> {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="education-column">
                    <h3>Education</h3>
                    <div className="edu-timeline">
                        {education.map((item, index) => (
                            <div key={index} className="edu-item glass">
                                <div className="edu-header">
                                    <GraduationCap className="edu-icon" size={24} />
                                    <div>
                                        <h4 className="edu-degree">{item.degree}</h4>
                                        <p className="edu-school">{item.school}</p>
                                    </div>
                                </div>
                                <div className="edu-footer">
                                    <span className="edu-period">{item.period}</span>
                                    <p className="edu-details">{item.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
