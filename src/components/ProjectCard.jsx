import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, category, description, id }) => {
    return (
        <Link to={`/project/${id}`} className="project-card" style={{ display: 'block' }}>
            <div style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                height: '100%'
            }}>
                {/* Placeholder Image Area */}
                <div style={{
                    height: '200px',
                    backgroundColor: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)'
                }}>
                    [Project Thumbnail]
                </div>

                <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                            {category}
                        </span>
                        <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
