

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import {Login} from './authentication/SignIn'

import { Register } from './authentication/SignUp'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

   
    
  )
}

export default App
