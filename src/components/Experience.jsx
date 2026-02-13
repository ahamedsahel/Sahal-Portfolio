export default function Experience() {
    const experiences = [
        {
            date: '2023 — Present',
            role: 'Lead Software Engineer',
            company: 'CloudNova Solutions',
            description:
                'Leading a team of 6 engineers building enterprise SaaS products. Architecting microservices with Node.js, designing scalable AWS infrastructure, and driving adoption of CI/CD best practices. Reduced deployment times by 60% and improved system uptime to 99.9%.',
            techs: ['Node.js', 'React', 'AWS', 'Docker', 'Terraform', 'PostgreSQL'],
        },
        {
            date: '2021 — 2023',
            role: 'Senior Software Engineer',
            company: 'WorkPlus',
            description:
                'Developed and maintained full-stack workforce management applications serving 50K+ users. Built real-time dashboards with React and Socket.io, engineered RESTful APIs with Express.js, and implemented automated testing pipelines. Led migration from monolith to microservices.',
            techs: ['React', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'Jenkins'],
        },
        {
            date: '2019 — 2021',
            role: 'Full-Stack Developer',
            company: 'iGrant',
            description:
                'Built identity and consent management platform features using the MERN stack. Developed secure authentication flows with OAuth 2.0 and JWT. Created responsive dashboards, integrated third-party APIs, and contributed to open-source modules used across the platform.',
            techs: ['MongoDB', 'Express.js', 'React', 'Node.js', 'OAuth 2.0', 'AWS S3'],
        },
    ]

    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">My Professional Journey</h2>
                    <p className="section-subtitle">
                        5+ years of building, leading, and shipping across world-class teams.
                    </p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <div key={i} className="timeline-item animate-in">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="glass-card timeline-card">
                                    <span className="timeline-date">{exp.date}</span>
                                    <h3>{exp.role}</h3>
                                    <div className="company">{exp.company}</div>
                                    <p>{exp.description}</p>
                                    <div className="tech-list">
                                        {exp.techs.map(t => (
                                            <span key={t}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-spacer"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
