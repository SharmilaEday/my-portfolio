import React, { useState } from 'react';
import { Github, ExternalLink, Activity, Brain, Layout, MessageSquare, LineChart } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "Policy Intelligence Agent",
            category: ["GenAI","NLP"],
            desc: "Automated policy monitoring agent using n8n & Google Gemini, fetches real-time content, runs sentiment analysis and summarization, and delivers reports to Google Sheets and email with zero manual input.",
            tech: ["n8n", "API", "Agentic AI", "LLMs", "Guardrails"],
            icon: <Activity />,
            github: "https://github.com/SharmilaEday/policy-analyzer-agent-n8n",
            demo: "#",
            results: "Fully agentic pipeline with real-time grounding, confidence-scored sentiment, automated stakeholder delivery."
        },
        {
            id: 2,
            title: "Automated IELTS Essay Scoring",
            category: ["GenAI", "NLP"],
            desc: "Built an NLP pipeline for automated essay scoring with scalable inference over 1,000+ essays supporting low latency.",
            tech: ["Hugging Face", "Transformers", "ModernBERT", "Optuna"],
            icon: <MessageSquare />,
            github: "https://github.com/noahk587/Students-Essays-Evaluation",
            demo: "#",
            results: "QWK 0.95, R² 0.90 for human-level reliability and 60% tuning cost reduction via Optuna."
        },
        {
            id: 3,
            title: "Bird Species Classification",
            category: ["Computer Vision", "Machine Learning"],
            desc: "Classified endangered Hawaiian bird species from audio using EfficientNet on Mel-Spectrograms and XGBoost on geographic features and deployed via Dockerized Flask API on AWS EC2 with CI/CD.",
            tech: ["AWS", "Docker", "EfficientNet", "XGBoost"],
            icon: <Layout />,
            github: "https://github.com/SharmilaEday/BirdClef-Audio-Classification-Project",
            demo: "#",
            results: "65% Macro F1-Score. Sub-2s inference for 95% of requests. 30% faster deploys via automated pipeline."
        },
        {
            id: 4,
            title: "Passenger Outcome Prediction",
            category: "Machine Learning",
            desc: "End-to-end ML pipeline on the Spaceship Titanic dataset engineered Total Expenses and Cabin features, compared Logistic Regression vs CatBoost, deployed ensemble via Streamlit for live inference.",
            tech: ["CatBoost", "Scikit-Learn", "Streamlit"],
            icon: <Layout />,
            github: "https://github.com/SharmilaEday/Passenger-Survival-Prediction-System",
            demo: "#",
            results: "16.5% accuracy boost via feature engineering. CatBoost reached 78.7% accuracy, 0.875 AUC-ROC."
        },
        {
            id: 5,
            title: "Intelligent Van Routing Simulation",
            category: ["Machine Learning","Data Visualisation"],
            desc: "Multi-agent urban routing, dynamic fleet assignment under simulated high-demand conditions.",
            tech: ["Python"],
            icon: <Layout />,
            github: "https://github.com/SharmilaEday",
            demo: "#",
            results: "26% wait time reduction. 36% trip efficiency gain. Scaled to 8–10 requests/min."
        },
        {
            id: 6,
            title: "Prompt Recovery using FLAN-T5",
            category: ["GenAI","NLP"],
            desc: "Built and deployed a Flask-based API with an HTML/CSS frontend delivering sub-2-second inference.",
            tech: ["FLAN-T5", "Hugging Face", "PyTorch", "CUDA"],
            icon: <Layout />,
            github: "https://github.com/SharmilaEday",
            demo: "#",
            results: "39% validation loss reduction, 85% semantic accuracy & 40% faster training via CUDA"
        },
        {
            id: 7,
            title: "Value Iteration for Reinforcement Learning",
            category: ["Machine Learning", "Data Visualisation"],
            desc: "Optimal policy learning in grid and graph-based MDPs, discounted reward analysis, obstacle handling, and custom Matplotlib policy visualizations.",
            tech: ["Python", "Matplotlib"],
            icon: <Layout />,
            github: "https://github.com/SharmilaEday",
            demo: "#",
            results: "12% policy value improvement. 40% better interpretability."
        },
        {
            id: 8,
            title: "Network Flow Optimization",
            category: "Machine Learning",
            desc: "Simulated annealing heuristic for directed network flow, benchmarked against Edmonds-Karp with probabilistic path selection, scaled to 1,000-node graphs with sparse connectivity handling.",
            tech: ["Python", "Simulated Annealing"],
            icon: <Layout />,
            github: "https://github.com/SharmilaEday",
            demo: "#",
            results: "65% of optimal flow in sparse topologies. Robust to zero-path cases making it applicable to logistics and energy routing."
        }

    ];

    const categories = ['All', 'NLP', 'GenAI', 'Machine Learning','Computer Vision', 'Data Visualisation'];

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
