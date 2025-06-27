import { Helmet } from 'react-helmet';
import { ROUTES } from '../../data/routes';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <link
                    rel="canonical"
                    href={`https://matthewbowman.uk${ROUTES.Privacy.path}`}
                />
                <title>Privacy Policy | Matthew Bowman</title>
            </Helmet>

            <section className={styles.privacySection}>
                <div className={styles.privacyContainer}>
                    <h1 className={styles.privacyTitle}>Privacy Policy</h1>
                    <p className={styles.privacyDate}>
                        <small>Last updated: June 2025</small>
                    </p>

                    <p>
                        Welcome to <strong>matthewbowman.uk</strong>. This Privacy Policy explains how I collect, use, and protect information when you visit my website.
                    </p>

                    <h2>1. Information I Collect</h2>
                    <p>
                        I use Google Analytics to understand how visitors use the site. Google Analytics collects information such as:
                    </p>
                    <ul>
                        <li>Pages you visit</li>
                        <li>Time spent on the site</li>
                        <li>Device and browser type</li>
                        <li>Approximate geographic location</li>
                    </ul>
                    <p>This data is anonymous — it does not include your name, email, or other personal details.</p>

                    <h2>2. How I Use This Information</h2>
                    <p>
                        The information collected helps me improve the website’s content and user experience. I do not sell or share this data with anyone.
                    </p>

                    <h2>3. Cookies</h2>
                    <p>
                        Google Analytics uses cookies to collect data. By using this site, you consent to the use of cookies. You can disable cookies in your browser settings, but some parts of the website may not work properly if you do.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        I take reasonable steps to protect your information. The data collected via Google Analytics is stored securely by Google and anonymized.
                    </p>

                    <h2>5. Changes to This Policy</h2>
                    <p>
                        I may update this Privacy Policy occasionally. Any changes will be posted here with an updated date.
                    </p>

                    <h2>6. Contact</h2>
                    <p>
                        If you have questions or concerns about this Privacy Policy, feel free to contact me at{' '}
                        <a href="mailto:matthew.bowman.02@outlook.com">matthew.bowman.02@outlook.com</a>
                    </p>
                </div>
            </section>
        </>
    );
}

export default PrivacyPolicy;
