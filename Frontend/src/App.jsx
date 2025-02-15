import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Userlogin from './Pages/Userlogin'
import Usersignup from './Pages/Usersignup'
import Captainlogin from './Pages/Captainlogin'
import CaptainSignup from './Pages/CaptainSignup'
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Userlogin />} />
      <Route path="/signup" element={<Usersignup />} />
      <Route path="/captain-login" element={<Captainlogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
     </Routes>
    </div>
  )
}

export default App