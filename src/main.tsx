import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// TELEGRAM WEB APP

declare global {
  interface Window {
    Telegram: any
  }
}

const tg = window.Telegram?.WebApp

if (tg) {

  tg.ready()

  tg.expand()

}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)