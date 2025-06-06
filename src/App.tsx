import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookieHandler } from "./components/CookieHandler/CookieHandler";
import Footer from "./components/Footer/Footer";
import { ROUTES } from "./data/routes";
import { lazy } from "react";

// Lazy load the pages
const Home = lazy(() => import("./pages/Home/Home"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path={ROUTES.Home.path} element={<Home />} />
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
