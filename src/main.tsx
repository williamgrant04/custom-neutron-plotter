import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouteDataProvider } from './store/routeData.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteDataProvider>
      <App />
    </RouteDataProvider>
  </StrictMode>,
)
