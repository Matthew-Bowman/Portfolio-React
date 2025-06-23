import { useNavigate } from 'react-router-dom';
import heroIllustration from '../../assets/hero-illustration.svg'
import Button from '../../components/Button/Button';
import styles from './LandingPage.module.css'
import { ROUTES } from '../../data/routes';
import { Helmet } from 'react-helmet';

function LandingPage() {

  const navigate = useNavigate();

  const handleContactButtonClicked = () => {
    navigate(ROUTES.ContactUs.path);
  }

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`https://matthewbowman.uk${ROUTES.Home.path}`}
        />
        <title>Home | Matthew Bowman</title>
      </Helmet>
      {/* Hero */}

      <div className={styles.sections}>
        <div className={styles.sectionLeft}>

          <h1 className={`${styles.fadeSlideInUp} ${styles.title}`}>Matthew <span>Bowman</span></h1>
          <h2 className={`${styles.fadeSlideInUp} ${styles.subtitle}`}>Web Developer</h2>
          <p className={`${styles.fadeSlideInUp} ${styles.slogan}`}>Deploying <span>Dreams</span>, Not Just Code</p>
          <Button className={`${styles.fadeSlideInUp} ${styles.button}`} text='Contact Me' onClick={handleContactButtonClicked} />

        </div>

        <div className={styles.sectionRight}>
          <img src={heroIllustration} alt='Hero Illustration' className={`${styles.fadeSlideInLeft} ${styles.mainIllustration}`} />
        </div>
      </div>

      {/* Page Content */}
    </>
  );
}

export default LandingPage;
