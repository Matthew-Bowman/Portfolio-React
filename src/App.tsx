import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy"

function App() {

  return (
    <Router>
      <Navbar />

      <main className="bg-light min-vh-100">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

      </main>

    </Router>
  )
}

export default App
