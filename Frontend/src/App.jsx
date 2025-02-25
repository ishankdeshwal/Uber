import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Userlogin from './Pages/Userlogin'
import Usersignup from './Pages/Usersignup'
import Captainlogin from './Pages/Captainlogin'
import CaptainSignup from './Pages/CaptainSignup'
import Start from './Pages/Start'
import UserProtectedWrapper from './Pages/UserProtectedWrapper'
import Userlogout from './Pages/Userlogout'
import CaptainHome from './Pages/CaptainHome'
import CaptainProtectedWrapper from './Pages/CaptainProtectedWrapper'
import CaptainLogout from './Pages/CaptainLogout'
function App() {
  return (
    <div>
  
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Userlogin />} />
      <Route path="/signup" element={<Usersignup />} />
      <Route path="/captain-login" element={<Captainlogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/home" element={
        <UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>
      }
       />
      <Route path="/user/logout" element={<UserProtectedWrapper>
        <Userlogout />
      </UserProtectedWrapper>}
       />
       <Route path='/captain-home' element={
        <CaptainProtectedWrapper>
          <CaptainHome />
        </CaptainProtectedWrapper>
       } />
       <Route path='/captain-logout' element={<CaptainLogout />} />
     </Routes>
    
    </div>
  )
}

export default App