import React, { useState } from 'react';
import { Github, ExternalLink, Activity, Brain, Layout, MessageSquare, LineChart } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "Visual Classification with Hybrid Features",
            category: "ML",
            desc: "Developed a hybrid feature system consisting of CNN embeddings and handcrafted features for 200 classes.",
            tech: ["Python", "PyTorch", "ResNet-18", "OpenCV", "Scikit"],
            icon: <Activity />,
            github: "https://github.com/SharmilaEday",
            demo: "#",
            results: "Achieved a top-5 accuracy of 0.87 using classifiers."
        },
        {
            id: 2,
            title: "Automated IELTS Essay Scoring",
            category: "GenAI",
            desc: "Built an NLP pipeline for automated essay scoring with scalable inference over 1,000+ essays supporting low latency.",
            tech: ["Hugging Face", "Transformers", "ModernBERT", "Optuna"],
            icon: <MessageSquare />,
            github: "https://github.com/SharmilaEday",
            demo: "#",
            results: "Achieved QWK 0.95, matching human-level reliability."
        },
        {
            id: 3,
            title: "Cloud Bird Species Classification",
            category: "Cloud",
            desc: "Built and deployed a Flask-based API with an HTML/CSS frontend delivering sub-2-second inference.",
            tech: ["Pandas", "NumPy", "Flask", "AWS", "Docker"],
            icon: <Layout />,
            github: "https://github.com/SharmilaEday",
            demo: "#",
            results: "Achieved 65% Macro F1-Score using XGBoost."
        }
    ];

    const categories = ['All', 'GenAI', 'Healthcare', 'ML', 'Data Viz'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="projects" id="projects">
            <h2>Featured Research & Projects</h2>

            <div className="filter-tabs">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card glass">
                        <div className="project-header">
                            <div className="project-icon">{project.icon}</div>
                            <div className="project-links">
                                <a href={project.github} className="link-icon" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                                <a href={project.demo} className="link-icon" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <div className="project-body">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>

                            <div className="project-tech">
                                {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                            </div>

                            <div className="project-results">
                                <strong>Key Achievement:</strong> {project.results}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
