import React,{useState,useContext,useEffect} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserProtectedWrapper({
    children
}) {
  const [isLoading,setIsLoading]=useState(true);
  const {user,setUser}=useContext(UserDataContext)
    const token=localStorage.getItem('token')
    const Navigate=useNavigate()
 useEffect(() => {
    if(!token){ 
        Navigate('/login')
    }else{
      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
        headers:{
      Authorization: `Bearer ${token}`
        }
       }).then(response=>{
        setUser(response.data.user)
        setIsLoading(false)
       }).catch(err=>{
        console.log(err);
        localStorage.removeItem('token')
        Navigate('/login')
       })
    }
 }, [token])

 
if(isLoading){
  return(
    <div>
      loading...
    </div>
  )
}
  return (
   
<>{children}</>
  )
}

export default UserProtectedWrapper