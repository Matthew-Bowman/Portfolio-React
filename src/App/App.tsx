import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookieHandler } from "../components/CookieHandler/CookieHandler";
import Footer from "../components/Footer/Footer";
import { ROUTES } from "../data/routes";
import { lazy } from "react";
import LandingPage from "../pages/LandingPage/LandingPage";
import styles from './App.module.css';
import ContactPage from "../pages/ContactPage/ContactPage";

// Lazy load the pages
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path={ROUTES.Home.path} element={<LandingPage />} />
            <Route path={ROUTES.ContactUs.path} element={<ContactPage />} />
            <Route path={ROUTES.Privacy.path} element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer />

        <CookieHandler />
      </div>
    </Router>
  );
}


export default App
