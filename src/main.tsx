import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import after bootstrap to override
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
