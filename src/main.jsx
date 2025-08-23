import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ResumeContext from './components/context/ResumeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeContext>
    <App />
    </ResumeContext>
  </StrictMode>,
)
