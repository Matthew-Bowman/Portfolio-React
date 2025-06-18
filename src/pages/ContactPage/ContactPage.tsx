import { useState, type FormEvent } from 'react';
import styles from './ContactPage.module.css'
import { Helmet } from 'react-helmet';
import { ROUTES } from '../../data/routes';

function ContactPage() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus('Failed to send.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`https://matthewbowman.uk/${ROUTES.ContactUs.path}`}
        />
        <title>Contact Us | Matthew Bowman</title>
      </Helmet>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Let's Work Together</h1>
          <p className={styles.subtitle}>Have a project in mind? Drop me a message!</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input name='name' type="text" placeholder="Your Name" onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input name='email' type="email" placeholder="your@email.com" onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea name='message' rows={5} placeholder="Tell me about your project..." onChange={handleChange} required />
            </div>

            {/* Honeypot Field to Prevent Abuse (Bots will fill this out automatically) */}
            <input name='honeypot' type="text" hidden />

            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>

          {status && <p style={{ marginTop: '1rem', textAlign: 'center' }}>{status}</p>}
        </div>
      </section>
    </>
  );
}

export default ContactPage;
