import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ROUTES } from "../data/routes";
import LandingPage from "../pages/LandingPage/LandingPage";
import styles from './App.module.css';
import ContactPage from "../pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path={ROUTES.Home.path} element={<LandingPage />} />
            <Route path={ROUTES.ContactUs.path} element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}


export default App
