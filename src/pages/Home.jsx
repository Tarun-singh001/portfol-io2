import { ArrowRight, Download, Mail } from 'lucide-react';
import ProjectCard from '../components/ProjectCard'; // Import ProjectCard
import ContactForm from '../components/ContactForm'; // Import ContactForm



const Home = () => {
    return (
        <div className="container" style={{ position: 'relative' }}>
            {/* Hero Section */}
            <header className="section hero" style={{ position: 'relative', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ position: 'relative', zIndex: 10 }}>


                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #a0a0a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Engineer-Turned-Strategist <br />Crafting Intuitive, Insight-Led Digital Experiences that Impact Users.
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2rem' }}>
                        I believe great products are born from clarity, empathy, and relentless iteration.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#work" className="btn btn-primary">
                            View My Work <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="/resume.pdf" target="_blank" className="btn btn-outline">
                            Resume <Download size={20} style={{ marginLeft: '0.5rem' }} />
                        </a>
                    </div>
                </div>
            </header>

            {/* Selected Work Section */}
            <section id="work" className="section">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderLeft: '4px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                    Selected Work
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <ProjectCard
                        id="1"
                        title="E-Commerce Redesign"
                        category="UX Research & Strategy"
                        description="Leading the redesign of a major e-commerce platform to improve conversion rates and user retention through data-driven insights."
                    />
                    <ProjectCard
                        id="2"
                        title="SaaS Dashboard"
                        category="Product Management"
                        description="Conceptualizing and launching a new analytics dashboard for B2B clients, focusing on actionable metrics and ease of use."
                    />
                    <ProjectCard
                        id="3"
                        title="Mobile Banking App"
                        category="Product Design"
                        description="End-to-end product lifecycle for a fintech mobile app, from user journey mapping to high-fidelity wireframes."
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section" style={{ marginTop: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Build Something Amazing</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Have a project in mind or just want to chat about product management?
                    </p>
                </div>
                <ContactForm />
            </section>

        </div>
    );
};

export default Home;
