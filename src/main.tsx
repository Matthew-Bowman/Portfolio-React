import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss';
import './main.css';
import App from './App/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
