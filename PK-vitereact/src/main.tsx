import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { gsap } from 'gsap';

createRoot(document.getElementById('root')!).render(<App />);
