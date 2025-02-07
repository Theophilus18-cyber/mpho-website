import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {ClerkProvider} from '@clerk/clerk-react'
const  clerk_key=import.meta.env.VITE_CLERK_KEY

if(!clerk_key){
  throw new Error("missing publishable key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>,
)
