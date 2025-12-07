import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for EmailJS integration
        console.log('Form submitted:', formData);
        setStatus('Thanks! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        fontFamily: 'inherit'
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Ask me anything..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{ ...inputStyle, resize: 'vertical' }}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
            </form>
            {status && <p style={{ marginTop: '1rem', color: 'var(--accent-primary)', textAlign: 'center' }}>{status}</p>}
        </div>
    );
};

export default ContactForm;
