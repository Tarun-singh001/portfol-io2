import { useState, useRef } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Check Configuration
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            console.error('EmailJS Config Error: Missing environment variables');
            setStatus('Error: EmailJS configuration missing in .env');
            return;
        }

        if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY === 'your_public_key_here') {
            console.error('EmailJS Config Error: Default public key detected');
            setStatus('Error: Please configure your EmailJS keys in the .env file.');
            return;
        }

        setIsSubmitting(true);
        setStatus('');

        // 2. Prepare Template Parameters
        // explicit mapping to ensure variables match EmailJS template
        const templateParams = {
            from_name: form.current.user_name.value,
            from_email: form.current.user_email.value,
            message: form.current.message.value,
        };

        console.log('Sending EmailJS with params:', templateParams);

        try {
            // 3. Send Email
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('EmailJS Success:', result.text);
            setStatus('Thanks! I will get back to you soon.');
            form.current.reset();
        } catch (error) {
            console.error('EmailJS Error Details:', error);
            const errorMessage = error.text || error.message || 'Something went wrong. Please try again later.';
            setStatus(`Failed: ${errorMessage}`);
        } finally {
            setIsSubmitting(false);
        }
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
            <form ref={form} onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        style={inputStyle}
                        disabled={isSubmitting}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        style={inputStyle}
                        disabled={isSubmitting}
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Ask me anything..."
                        required
                        rows="5"
                        style={{ ...inputStyle, resize: 'vertical' }}
                        disabled={isSubmitting}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>Sending... <Loader2 size={18} style={{ marginLeft: '0.5rem', animation: 'spin 1s linear infinite' }} /></>
                    ) : (
                        <>Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} /></>
                    )}
                </button>
            </form>
            {status && (
                <p style={{
                    marginTop: '1rem',
                    color: status.includes('Error') || status.includes('Failed') ? '#ef4444' : '#10b981', // Red for error, Green for success
                    textAlign: 'center'
                }}>
                    {status}
                </p>
            )}
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default ContactForm;
