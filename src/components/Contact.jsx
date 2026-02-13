import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Thanks for reaching out! I'll get back to you soon.")
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Contact</span>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle">Have a project in mind? I'd love to hear from you.</p>
                </div>
                <div className="contact-grid">
                    <div className="contact-info animate-in">
                        <h3>Get In Touch</h3>
                        <p>I'm open to new opportunities, freelance projects, and collaborations.</p>
                        <div className="contact-items">
                            <div className="contact-item">
                                <div className="icon">📧</div>
                                <div className="details"><div className="label">Email</div><div className="value">ahmed.sahal@email.com</div></div>
                            </div>
                            <div className="contact-item">
                                <div className="icon">📍</div>
                                <div className="details"><div className="label">Location</div><div className="value">Available Worldwide (Remote)</div></div>
                            </div>
                            <div className="contact-item">
                                <div className="icon">💼</div>
                                <div className="details"><div className="label">Status</div><div className="value">Open to Opportunities</div></div>
                            </div>
                        </div>
                        <div className="contact-socials">
                            <a href="#" className="social-btn" aria-label="GitHub">⌨️</a>
                            <a href="#" className="social-btn" aria-label="LinkedIn">💼</a>
                            <a href="#" className="social-btn" aria-label="Twitter">🐦</a>
                        </div>
                    </div>
                    <div className="glass-card contact-form-wrapper animate-in">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contact-name">Your Name</label>
                                    <input type="text" id="contact-name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-email">Your Email</label>
                                    <input type="email" id="contact-email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-subject">Subject</label>
                                <input type="text" id="contact-subject" name="subject" placeholder="Let's collaborate on..." value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-message">Message</label>
                                <textarea id="contact-message" name="message" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message →</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
