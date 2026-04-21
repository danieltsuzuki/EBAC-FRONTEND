import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StyledEngineProvider } from '@mui/material'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
)
