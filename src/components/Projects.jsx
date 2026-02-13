export default function Projects() {
    const projects = [
        {
            emoji: '🏢',
            title: 'Enterprise HR Platform',
            description:
                'A full-featured human resource management system with real-time attendance tracking, payroll integration, and employee self-service portals serving 50K+ users.',
            tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
        },
        {
            emoji: '🔐',
            title: 'Identity & Consent Manager',
            description:
                'Privacy-first identity management platform with OAuth 2.0 flows, consent dashboards, GDPR compliance tools, and secure API gateway integration.',
            tags: ['MERN', 'OAuth 2.0', 'JWT', 'PostgreSQL', 'Docker'],
        },
        {
            emoji: '📊',
            title: 'Real-time Analytics Dashboard',
            description:
                'Interactive business intelligence dashboard with live data streaming, customizable widgets, export capabilities, and role-based access controls.',
            tags: ['React', 'D3.js', 'Redis', 'Express', 'WebSockets'],
        },
        {
            emoji: '🛒',
            title: 'E-Commerce Microservices',
            description:
                'Scalable e-commerce platform built with microservices architecture, featuring product catalog, cart management, payment processing, and order fulfillment.',
            tags: ['Node.js', 'React', 'AWS Lambda', 'DynamoDB', 'Stripe'],
        },
    ]

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Projects</span>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-subtitle">
                        A selection of projects I've built and contributed to throughout my career.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <div key={i} className="glass-card project-card animate-in">
                            <div className="project-image">
                                <div className="project-gradient">{project.emoji}</div>
                            </div>
                            <div className="project-card-body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href="#">View Details →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
