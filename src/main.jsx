import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contenedor from './Contenedor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-900 text-white px-4 py-2 rounded z-50"
    >
      Saltar a los productos
    </a>
    <App />
    </> 
  </StrictMode>,
)
