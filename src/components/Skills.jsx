import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "AI / ML Core",
            skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Model Training", "Evaluation", "Feature Engineering"]
        },
        {
            title: "Generative AI & LLMs",
            skills: ["LLMs", "LangChain", "RAG", "Prompt Engineering", "Fine-tuning (LoRA, QLoRA)", "Vector Databases"]
        },
        {
            title: "Cloud & MLOps",
            skills: ["AWS (SageMaker, Lambda)", "GCP (Vertex AI)", "Azure ML", "Docker", "Kubernetes", "CI/CD Pipelines"]
        },
        {
            title: "Data Eng & Visualization",
            skills: ["Python", "Pandas/NumPy", "PySpark", "SQL", "Tableau", "Power BI", "EDA"]
        }
    ];

    return (
        <section className="skills" id="skills">
            <h2>Technical Expertise</h2>
            <div className="skills-grid">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        className="skill-card glass"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3>{category.title}</h3>
                        <div className="skill-tags-container">
                            {category.skills.map(skill => (
                                <span key={skill} className="skill-tag-pill">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Visual indicator of proficiency clusters */}
                        <div className="skill-bar-simple">
                            <motion.div
                                className="skill-bar-fill"
                                initial={{ width: 0 }}
                                whileInView={{ width: '90%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
