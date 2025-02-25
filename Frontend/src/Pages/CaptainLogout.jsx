import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function CaptainLogout() {
    const token=localStorage.getItem('token')
    const navigate=useNavigate()
    axios.get(`${import.meta.env.VITE_API_URL}/captain/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }  
    }).then(res=>{
        if(res.status===200){
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
    })
  return (
    <div>
        Logging out....
    </div>
  )
}

export default CaptainLogout