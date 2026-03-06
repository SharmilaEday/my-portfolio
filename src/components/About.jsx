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
            details: "GPA: 4.00/4.00. Focus: ML, Deep Learning, NLP, GenAI, Big Data."
        },
        {
            degree: "Bachelor of Technology in Electronics and Communication Engineering",
            school: "Jawaharlal Nehru Technological University",
            location: "India",
            period: "May 2024",
            details: "Foundation in Data Structures and Algorithms, Probability Fundamentals, Statistics."
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
                        I am an **AI Engineer and Generative AI Developer** currently pursuing my Master’s in Artificial Intelligence at the
                        University of North Texas. My work focuses on building high-impact intelligent systems that bridge
                        the gap between complex data and real-world utility.
                    </p>
                    <p>
                        With experience spanning from **academic research in Generative AI** to internships in **Computer Vision**,
                        I specialize in architecting LLM-powered applications using RAG, optimizing machine learning
                        pipelines, and deploying AI models on cloud platforms like GCP and AWS.
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
