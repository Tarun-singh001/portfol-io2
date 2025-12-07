import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 100
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Portfolio<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </Link>
                <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                    <li><Link to="/">Work</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
