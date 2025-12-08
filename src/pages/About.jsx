import { Briefcase, GraduationCap, Award, Code, Download, ExternalLink, Mail, Phone, Linkedin, Github } from 'lucide-react';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>

            {/* Header */}
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Tarun Singh</h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Aspiring Product Manager</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <a href="mailto:tarun.singh2002.06@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                        <Mail size={18} /> tarun.singh2002.06@gmail.com
                    </a>
                    <a href="tel:+916265577156" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                        <Phone size={18} /> +91-626-557-7156
                    </a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a href="https://linkedin.com/in/ta-run-singh" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <Linkedin size={20} style={{ marginRight: '0.5rem' }} /> LinkedIn
                    </a>
                    <a href="https://github.com/Tarun-singh001" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <Github size={20} style={{ marginRight: '0.5rem' }} /> GitHub
                    </a>
                    <a href="/resume.pdf" target="_blank" className="btn btn-primary">
                        <Download size={20} style={{ marginRight: '0.5rem' }} /> Download Resume
                    </a>
                </div>
            </header>

            {/* Experience */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    <Briefcase className="text-accent" /> Professional Experience
                </h2>

                <div className="timeline">
                    <div className="timeline-item" style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Junior Program Manager</h3>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Jun 2025 – Present</span>
                        </div>
                        <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Brick & Bolt, Bengaluru, India</div>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                            <li>Authored BRDs and launched features like revamped form flows with exhaustive dropdowns and mandatory closure reasons, enhancing lead traceability.</li>
                            <li>Mapped user journeys and designed digital touchpoints across app and email to streamline sales communication.</li>
                            <li>Led analytics pod to build dashboards and surface sales insights, enabling faster GTM pivots.</li>
                        </ul>
                    </div>

                    <div className="timeline-item" style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Founder’s Office PM Intern</h3>
                            <span style={{ color: 'var(--text-secondary)' }}>Jan 2025 – Jun 2025</span>
                        </div>
                        <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>ElectricPe (EV Fintech), Bengaluru, India</div>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                            <li>Drove product discovery for stock-audit & PoD features by authoring BRDs and wireframes.</li>
                            <li>Automated CRM workflows, improving call-connection rates 33% → 41%.</li>
                            <li>Co-built WhatsApp engagement flows with the CPO to boost user communication.</li>
                            <li>Led Ugadi-focused customer campaigns, driving culturally relevant engagement.</li>
                        </ul>
                    </div>

                    <div className="timeline-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Strategy Consulting Intern</h3>
                            <span style={{ color: 'var(--text-secondary)' }}>Jan 2023 – May 2023</span>
                        </div>
                        <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>HUDA (Haryana Urban Development Authority), Remote</div>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                            <li>Optimized operations and launched targeted campaigns increasing member retention by 25%.</li>
                            <li>Collaborated with a 5-member government-supervised team ensuring strategic alignment.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    <GraduationCap className="text-accent" /> Education
                </h2>

                <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>National Institute of Technology, Raipur</h3>
                        <span>Graduated Jun 2025</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>B.Tech., Electrical Engineering | <strong>7.61 CGPA</strong></p>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Relevant coursework: Data Analytics with Python, Pattern Recognition</p>
                </div>
            </section>

            {/* Skills */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    <Code className="text-accent" /> Skills
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Product & PM</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['BRDs', 'Wireframing (Figma)', 'Journey Mapping', 'Roadmapping', 'Requirement Gathering', 'Design Thinking'].map(skill => (
                                <span key={skill} style={{ background: 'var(--bg-card)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.875rem', border: '1px solid var(--border-color)' }}>{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Data & Analytics</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['Mixpanel', 'Metabase', 'SQL', 'Excel', 'Visualization'].map(skill => (
                                <span key={skill} style={{ background: 'var(--bg-card)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.875rem', border: '1px solid var(--border-color)' }}>{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Tools & Technical</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['JIRA', 'Miro', 'Git', 'Agile/Scrum', 'Notion', 'Python', 'C++', 'HTML/CSS', 'JS'].map(skill => (
                                <span key={skill} style={{ background: 'var(--bg-card)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.875rem', border: '1px solid var(--border-color)' }}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Certifications */}
            <section>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    <Award className="text-accent" /> Awards & Recognitions
                </h2>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div className="card" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>AI Product Management Fellow</h3>
                        <p style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>AcceleratorX | Nov 2025 - Mar 2026</p>
                        <p style={{ color: 'var(--text-muted)' }}>Selected for a fellowship focused on AI-first product strategy. Awarded 60% scholarship.</p>
                    </div>

                    <div className="card" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Business Case Competition Finalist</h3>
                        <p style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>IIM Bangalore</p>
                        <p style={{ color: 'var(--text-muted)' }}>Ranked #6 among 800+ global participants; only undergraduate team recognized.</p>
                    </div>

                    <div className="card" style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Case Study Competition Winner</h3>
                        <p style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>NIT Nagpur</p>
                        <p style={{ color: 'var(--text-muted)' }}>Secured top rank among 100+ teams based on solution, feasibility and presentation.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
