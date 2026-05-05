import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.title = 'Beauty Slim';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)