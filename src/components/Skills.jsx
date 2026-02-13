export default function Skills() {
    const stacks = [
        {
            icon: '⚛️',
            title: 'MERN Stack',
            subtitle: 'Core Expertise',
            tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mongoose', 'JWT Auth'],
        },
        {
            icon: '☁️',
            title: 'AWS Cloud',
            subtitle: 'Cloud Infrastructure',
            tags: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFront', 'IAM', 'API Gateway', 'SQS'],
        },
        {
            icon: '🔧',
            title: 'DevOps & CI/CD',
            subtitle: 'Automation & Deployment',
            tags: ['Docker', 'GitHub Actions', 'Jenkins', 'Nginx', 'PM2', 'Linux', 'Terraform'],
        },
        {
            icon: '🎨',
            title: 'Frontend Ecosystem',
            subtitle: 'UI & Client-side',
            tags: ['React', 'Next.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Vite'],
        },
        {
            icon: '🗄️',
            title: 'Backend & Database',
            subtitle: 'Server & Data Layer',
            tags: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Redis', 'Socket.io'],
        },
    ]

    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Tech Stack</span>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-subtitle">
                        5 years of mastering diverse technologies across the full development spectrum.
                    </p>
                </div>

                <div className="skills-grid">
                    {stacks.map((stack, i) => (
                        <div key={i} className="glass-card skill-card animate-in">
                            <div className="skill-card-header">
                                <div className="skill-icon">{stack.icon}</div>
                                <div>
                                    <h3>{stack.title}</h3>
                                    <p>{stack.subtitle}</p>
                                </div>
                            </div>
                            <div className="skill-tags">
                                {stack.tags.map(tag => (
                                    <span key={tag} className="skill-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
