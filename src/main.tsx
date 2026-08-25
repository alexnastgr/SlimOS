import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import SlimOS from './SlimOS.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SlimOS />
  </StrictMode>,
)
