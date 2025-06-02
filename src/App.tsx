import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import { CookieHandler } from "./components/CookieHandler/CookieHandler";
import Footer from "./components/Footer/Footer";
import { ROUTES } from "./data/routes";


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
