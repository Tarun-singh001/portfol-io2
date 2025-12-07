import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div className="container section">Project not found. <Link to="/">Go Home</Link></div>;
    }

    return (
        <div className="container">
            <div className="section" style={{ paddingBottom: '2rem' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to Work
                </Link>

                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>{project.title}</h1>
                <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    <div><strong>Role:</strong> {project.role}</div>
                    <div><strong>Duration:</strong> {project.duration}</div>
                    <div><strong>Category:</strong> {project.category}</div>
                </div>

                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', maxWidth: '800px' }}>
                    {project.overview}
                </p>
            </div>

            {/* Overview / BRD Section */}
            <section className="section">
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    The Challenge (BRD)
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Problem Statement</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{project.details.problem}</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Objectives</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {project.details.objectives.map((obj, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                    <CheckCircle size={16} style={{ marginRight: '0.5rem', color: 'var(--accent-primary)' }} />
                                    {obj}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* PRD Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', margin: '0 -2rem', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Solution & Features (PRD)</h2>

                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Target Users</h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {project.details.userSegments.map((seg, i) => (
                            <span key={i} style={{
                                border: '1px solid var(--border-color)',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                backgroundColor: 'var(--bg-primary)',
                                fontSize: '0.9rem'
                            }}>{seg}</span>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {project.details.keyFeatures.map((feature, i) => (
                        <div key={i} style={{ backgroundColor: 'var(--bg-primary)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{feature.title}</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process / Journey */}
            <section className="section">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Process & Journey</h2>
                <div style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '2rem' }}>
                    {project.details.process.map((step, i) => (
                        <div key={i} style={{ marginBottom: '3rem', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                left: '-2.6rem',
                                top: '0',
                                width: '1.2rem',
                                height: '1.2rem',
                                borderRadius: '50%',
                                backgroundColor: 'var(--accent-primary)'
                            }}></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{step.phase}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Wireframes / Visuals Placeholder */}
            <section className="section">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Concept & Wireframes</h2>
                <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'var(--radius-md)',
                    border: '2px dashed var(--border-color)'
                }}>
                    <span style={{ color: 'var(--text-muted)' }}>Interactive Prototype / Wireframes Embed</span>
                </div>
            </section>

            {/* Links */}
            <section className="section" style={{ textAlign: 'center' }}>
                <a href={project.links.demo} className="btn btn-primary" style={{ marginRight: '1rem' }}>
                    View Live Demo <ExternalLink size={18} style={{ marginLeft: '0.5rem' }} />
                </a>
            </section>

        </div>
    );
};

export default ProjectDetail;
