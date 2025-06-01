import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga4';
import App from './App'

const measurementId = "G-5DP5061Q4P";

ReactGA.initialize(measurementId);
ReactGA.send("pageview");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
