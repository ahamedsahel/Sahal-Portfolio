import { useState, useEffect } from 'react'

export default function Hero() {
    const titles = ['Full-Stack Developer', 'MERN Specialist', 'Cloud Architect', 'Problem Solver']
    const [titleIndex, setTitleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentTitle = titles[titleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentTitle.length) {
                    setCharIndex(prev => prev + 1)
                } else {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex(prev => prev - 1)
                } else {
                    setIsDeleting(false)
                    setTitleIndex(prev => (prev + 1) % titles.length)
                }
            }
        }, isDeleting ? 40 : 80)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, titleIndex])

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>
            <div className="hero-grid"></div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Available for Opportunities
                    </div>

                    <h1 className="hero-name">
                        Hi, I'm <br />
                        <span className="gradient-text">Ahmed Sahal</span>
                    </h1>

                    <p className="hero-title">
                        <span className="typed">
                            {titles[titleIndex].substring(0, charIndex)}
                        </span>
                    </p>

                    <p className="hero-desc">
                        A passionate Full-Stack Software Engineer with 5+ years of experience
                        building scalable web applications, cloud-native solutions, and
                        leading high-performance engineering teams.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Work →
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Get In Touch
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="number">5+</div>
                            <div className="label">Years Experience</div>
                        </div>
                        <div className="hero-stat">
                            <div className="number">25+</div>
                            <div className="label">Projects Delivered</div>
                        </div>
                        <div className="hero-stat">
                            <div className="number">3</div>
                            <div className="label">Companies</div>
                        </div>
                        <div className="hero-stat">
                            <div className="number">15+</div>
                            <div className="label">Technologies</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
