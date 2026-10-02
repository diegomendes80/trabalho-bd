import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/bebas-neue";
import "@fontsource/inter";
import "@fontsource/jetbrains-mono";
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
