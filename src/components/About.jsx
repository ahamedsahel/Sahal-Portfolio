export default function About() {
    const infoItems = [
        { label: 'Name', value: 'Ahmed Sahal' },
        { label: 'Experience', value: '5+ Years' },
        { label: 'Location', value: 'Dubai, UAE' },
        { label: 'Speciality', value: 'Full-Stack & AI Systems' },
    ]

    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Turning Ideas Into Digital Reality</h2>
                    <p className="section-subtitle">
                        A glimpse into who I am, what drives me, and why I love building software.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-image-wrapper animate-in">
                        <div className="about-image">
                            <div className="image-placeholder">👨‍💻</div>
                        </div>
                        <div className="about-floating-card">
                            <div className="icon">🚀</div>
                            <div className="info">
                                <div className="count">5+</div>
                                <div className="text">Years of Expertise</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-text animate-in">
                        <h3>Full-Stack Engineer & AI Systems Builder</h3>
                        <p>
                            I'm Ahmed Sahal, a Full-Stack Engineer with 5+ years of hands-on experience
                            architecting AI-powered systems, agentic workflows, and production-grade backends.
                            I'm a deep practitioner of LangChain, LangGraph, RAG pipelines, and MCP server
                            architecture — with a proven track record of transforming complex real-world
                            challenges into robust, scalable systems.
                        </p>
                        <p>
                            At Tuscan Consulting, I designed and deployed Consultex AI — a fully agentic
                            HR platform that replaced end-to-end manual consulting workflows with autonomous
                            AI agents. My work spans multi-agent orchestration, intelligent document retrieval,
                            and scalable backend engineering. I'm passionate about advancing agentic AI
                            research and human-information interaction.
                        </p>

                        <div className="about-info-grid">
                            {infoItems.map(item => (
                                <div key={item.label} className="about-info-item">
                                    <div className="info-label">{item.label}</div>
                                    <div className="info-value">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
