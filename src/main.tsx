import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>

  </React.StrictMode>,
)
