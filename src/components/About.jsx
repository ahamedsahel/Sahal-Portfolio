export default function About() {
    const infoItems = [
        { label: 'Name', value: 'Ahmed Sahal' },
        { label: 'Experience', value: '5+ Years' },
        { label: 'Location', value: 'Available Remote' },
        { label: 'Speciality', value: 'MERN / AWS' },
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
                        <h3>A Passionate Engineer Who Loves Clean Code & Scalable Systems</h3>
                        <p>
                            I'm Ahmed Sahal, a Full-Stack Software Engineer with over 5 years of
                            hands-on experience designing and shipping production-grade applications.
                            I specialize in the MERN stack — MongoDB, Express.js, React, and Node.js —
                            and have deep expertise with AWS cloud services.
                        </p>
                        <p>
                            Throughout my career at companies like iGrant, WorkPlus, and CloudNova Solutions,
                            I've worked across the full development lifecycle — from architecting
                            backends and crafting responsive UIs to deploying CI/CD pipelines
                            and mentoring junior developers. I thrive in fast-paced environments where
                            clean code, agile methodology, and collaboration drive success.
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
