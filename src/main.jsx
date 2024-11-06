import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from './components';

createRoot(document.getElementById('root')).render(
    <ErrorBoundary>
     <App />
    </ErrorBoundary>
)