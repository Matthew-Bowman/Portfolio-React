import { useState, type FormEvent } from 'react';
import styles from './ContactPage.module.css'
import { Helmet } from 'react-helmet';
import { ROUTES } from '../../data/routes';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import Button from '../../components/Button/Button';

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
          href={`https://matthewbowman.uk${ROUTES.ContactUs.path}`}
        />
        <title>Contact Us | Matthew Bowman</title>
      </Helmet>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Let's Work Together</h1>
          <p className={styles.subtitle}>Have a project in mind? Drop me a message!</p>

          <form className={styles.form} onSubmit={handleSubmit}>

            <Input label='Name' className={`${styles.fadeLeft}`} placeholder='Your Name' name='name' type='text' onChange={handleChange} required />

            <Input label='Email' className={`${styles.fadeLeft}`} placeholder='your@email.com' name='email' type='email' onChange={handleChange} required />

            <TextArea label={'Message'} className={`${styles.fadeLeft}`} rows={5} placeholder={'Tell me about your project...'} name={'message'} onChange={handleChange} />

            <Button className={`${styles.fadeLeft}`} text='Send Message' onClick={() => { }} />
            
            {/* Honeypot Field to Prevent Abuse (Bots will fill this out automatically) */}
            <input name='honeypot' type="text" hidden />


          </form>

          {status && <p style={{ marginTop: '1rem', textAlign: 'center' }}>{status}</p>}
        </div>
      </section>
    </>
  );
}

export default ContactPage;
